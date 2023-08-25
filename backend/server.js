import express from "express";
import dotenv from 'dotenv';
import connectDB from "./Connection.js";
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';
import menuRoutes from './Routes/menuRoutes.js';
import projectRoues from './Routes/projectRoutes.js';
import issueRoutes from './Routes/issueRoutes.js';
import teamRoutes from './Routes/teamRoutes.js';
import cors from 'cors';

dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4545

app.use("/users",userRoutes);
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.use("/menu",menuRoutes);
app.use('/project',projectRoues);
app.use('/issue',issueRoutes);
app.use('/team',teamRoutes);

app.listen(PORT,() => console.log(`server is running on port ${PORT}`));
