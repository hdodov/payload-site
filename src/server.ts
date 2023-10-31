import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

// Initialize Payload
payload.init({
	secret: process.env.PAYLOAD_SECRET,
	express: app,
	onInit: async () => {
		await payload.create({
			collection: "users",
			data: {
				email: "dev@payloadcms.com",
				password: "test",
				roles: ["admin"],
			},
		});

		await payload.create({
			collection: "users",
			data: {
				email: "user@payloadcms.com",
				password: "test2",
				roles: ["user"],
			},
		});

		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
	},
});

// Add your own express routes here

app.listen(3000);
