import { APIError } from 'payload/errors';

const logs = false;

export const subscriptionDeleted = async (args) => {
  const {
    event,
    payload,
  } = args;

  const customerStripeID = event.data.object.customer;

  if (logs) payload.logger.info(`🪝 A new subscription was deleted in Stripe on customer ID: ${customerStripeID}, deleting from Payload...`);

  const {
    id: eventID,
  } = event.data.object;

  // Now look up the customer in Payload
  try {
    if (logs) payload.logger.info(`- Looking up existing Payload customer with Stripe ID: ${customerStripeID}.`);

    const usersReq: any = await payload.find({
      collection: 'users',
      depth: 0,
      where: {
        stripeID: customerStripeID
      }
    })

    const foundUser = usersReq.docs[0];

    if (foundUser) {
      if (logs) payload.logger.info(`- Found existing customer, now updating.`);

      const subscriptions = foundUser.subscriptions || [];
      const indexOfSubscription = subscriptions.findIndex(({ stripeSubscriptionID }) => stripeSubscriptionID === eventID);

      if (indexOfSubscription > -1) {
        delete subscriptions[indexOfSubscription];
      }

      try {
        await payload.update({
          collection: 'users',
          id: foundUser.id,
          data: {
            subscriptions,
            skipSync: true
          }
        })

        if (logs) payload.logger.info(`✅ Successfully deleted subscription.`);
      } catch (error) {
        payload.logger.error(`- Error deleting subscription: ${error}`);
      }
    } else {
      if (logs) payload.logger.info(`- No existing customer found, cannot update subscription.`);
    }
  } catch (error) {
    new APIError(`Error looking up customer with Stripe ID: '${customerStripeID}': ${error?.message}`);
  }
};
