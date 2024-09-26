import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
	try {
		await mongoose.connect(config.mongodb_uri as string);
		app.listen(config.port, () => {
			console.log(`Example app listening on PORT ${config.port}`);
		});
  } catch (error) {
    console.log(error)
  }
}

main()
