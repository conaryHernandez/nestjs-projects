import { TaskStatus } from '../enums/task-status';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}