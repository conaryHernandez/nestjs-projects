import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTasksWithFilters(filterDto: GetTaskFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}