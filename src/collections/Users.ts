import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "name",
	},
	access: {
		create: isAdmin,
		read: isAdminOrSelf,
		update: isAdminOrSelf,
		delete: isAdmin,
	},
	fields: [
		{
			type: "email",
			name: "email",
			required: true,
			access: {
				update: isAdminFieldLevel,
			},
		},
		{
			name: "roles",
			type: "select",
			options: ["admin", "user"],
			defaultValue: ["user"],
			required: true,
			hasMany: true,
			access: {
				create: isAdminFieldLevel,
				read: isAdminFieldLevel,
				update: isAdminFieldLevel,
			},
		},
	],
};

export default Users;
