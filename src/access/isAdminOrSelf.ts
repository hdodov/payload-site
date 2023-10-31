// https://github.com/payloadcms/website-cms/blob/02e4bf2bff8993dc1465d93ff776fb0412dc7d6d/src/access/isAdminOrSelf.ts

import type { Access } from "payload/config";
import type { FieldAccess } from "payload/types";
import type { User } from "../payload-types";

export const isAdminOrSelfFieldLevel: FieldAccess<any, any, User> = ({
	req: { user },
	id,
}) => {
	if (!user) return false;
	if (user.roles?.includes("admin")) return true;
	if (user.id === id) return true;
};

export const isAdminOrSelf: Access<any, User> = isAdminOrSelfFieldLevel;
