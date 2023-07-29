import { StudentGradesDto } from 'App/Dtos/Services/StudentGradesDto'

export default class StudentGradesService {
  public async calculateAverage({
    firstSubjectGrade,
    secondSubjectGrade,
    thirdSubjectGrade,
  }: StudentGradesDto) {
    const sumAllGrade = firstSubjectGrade + secondSubjectGrade + thirdSubjectGrade
    const averageStudent = sumAllGrade / 3
    return { studentAvarage: averageStudent }
  }
}
