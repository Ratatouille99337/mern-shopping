import { Access } from "payload/config";
import { checkRole } from "../collections/Users/checkRole";

export const admins: Access = ({ req: { user } }) => checkRole(['admin'], user);
