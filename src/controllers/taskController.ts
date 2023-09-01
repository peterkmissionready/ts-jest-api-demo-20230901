import { Request, Response } from 'express';
import * as taskService from '../services/taskService'

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks()
  res.send(tasks)
};