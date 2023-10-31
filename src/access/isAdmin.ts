// https://github.com/payloadcms/website-cms/blob/02e4bf2bff8993dc1465d93ff776fb0412dc7d6d/src/access/isAdmin.ts

import type { Access, FieldAccess } from "payload/types";
import type { User } from "../payload-types";

export const isAdminFieldLevel: FieldAccess<any, any, User> = ({
	req: { user },
}) => user?.roles?.includes("admin");

export const isAdmin: Access<any, User> = isAdminFieldLevel;
