import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssingStudentsToLessonInput } from './asssing-students-to-lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assingStudentsToLessonInput')
    assignStudentsToLessonInput: AssingStudentsToLessonInput,
  ) {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;

    return this.lessonService.assignStudentsToLesson(lessonId, studentsIds);
  }
}
