import express from 'express';
import env from 'dotenv';
import { getAllTasks } from './controllers/taskController';

env.config();

const server = express();
server.use(express.json());


/* let tasks = [
    {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
    },
]; */
server.use('/api/tasks', getAllTasks);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});