const logs = false;

export const priceUpdated = async (args) => {
  const {
    event,
    payload,
    stripe
  } = args;

  const stripeProductID = event.data.object.product;

  if (logs) payload.logger.info(`🪝 A price was created or updated in Stripe on product ID: ${stripeProductID}, syncing to Payload...`);

  let payloadProductID;

  // First lookup the product in Payload
  try {
    if (logs) payload.logger.info(`- Looking up existing Payload product...`);

    const productQuery = await payload.find({
      collection: 'products',
      where: {
        stripeProductID: {
          equals: stripeProductID
        }
      }
    });

    payloadProductID = productQuery.docs?.[0]?.id;

    if (payloadProductID) {
      if (logs) payload.logger.info(`- Found existing product with Stripe ID: ${stripeProductID}, saving price...`);
    }

  } catch (error: any) {
    payload.logger.error(`Error finding product ${error?.message}`);
  }

  try { 
    // find all stripe prices that are assigned to "payloadProductID"
    const stripePrices = await stripe.prices.list({
      product: stripeProductID,
      limit: 100
    });

    await payload.update({
      collection: 'products',
      id: payloadProductID,
      data: {
        priceJSON:  JSON.stringify(stripePrices),
        skipSync: true
      }
    })

    if (logs) payload.logger.info(`✅ Successfully updated product price.`);
  } catch (error) {
    payload.logger.error(`- Error updating product price: ${error}`);
  }
};