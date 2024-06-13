import express from "express";
import connectDB from "./src/config/database.js";
import agentRouter from "./src/routes/agent.routes.js";
import bookingRouter from "./src/routes/booking.routes.js";
import schedulerRouter from "./src/routes/scheduler.routes.js";
import userRouter from "./src/routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


// Define Routes
app.use("/api", agentRouter);
app.use("/api", bookingRouter);
app.use("/api", schedulerRouter);
app.use("/api", userRouter);

export default app;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
