import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import path from "path";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";

export default buildConfig({
	serverURL: "http://localhost:3000",
	admin: {
		bundler: webpackBundler(),
		user: Users.slug,
	},
	editor: slateEditor({}),
	db: mongooseAdapter({
		url: process.env.MONGODB_URI,
	}),
	collections: [Categories, Posts, Tags, Users],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
});
