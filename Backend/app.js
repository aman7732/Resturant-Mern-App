import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js";
import reservationRoutes from "./Routes/reservationRoutes.js"

const app = express()
dotenv.config({path: '/config/config.env'});

app.use(cors({
   origin:[process.env.FRONTED_URI],
   methods: ["POST"],
   credentials : true,
})
);

app.use(express.json());
app.use(express.urlencoded({
   extended : true
}))
app.use('api/v1/reservation', reservationRoutes)

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

dbConnection(USERNAME, PASSWORD);

app.use(errorMiddleware);

export default app;