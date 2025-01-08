import mongoose, { connect, Connection } from "mongoose";
import { app } from "./app";

async function bootstrap() {
  try {
    const  connection = await connect(
      process.env.DB_CONNECTION as string
    );
  } catch (error) {
    console.log("error connecting to mongoose");
  }

  app.listen(process.env.PORT, () => {
    console.log(`Hospital Food Management app listening on port ${process.env.PORT}`);
  });
}

bootstrap();
