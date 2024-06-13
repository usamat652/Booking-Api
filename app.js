import express from 'express';
import connectDB from './src/config/database';
import agentRouter from './src/routes/agent.routes';
import bookingRouter from './src/routes/booking.routes';
import schedulerRouter from './src/routes/scheduler.routes';
import userRouter from './src/routes/user.routes';


connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api', agentRouter);
app.use('/api', bookingRouter);
app.use('/api', schedulerRouter);
app.use('/api', userRouter);

export default app;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
