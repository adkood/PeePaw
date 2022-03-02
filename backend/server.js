const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./config.env" });

const port = 3000 || process.env.PORT;

const server = app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
	console.log("UNHANDLED REJECTION! SHUTTING DOWN!");
	console.log(err);

	//gracefull  exit
	server.close(() => {
		process.exit(1);
	});
});
