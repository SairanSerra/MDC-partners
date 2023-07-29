import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StudentGradesService from 'App/Services/StudentGradesService'
import StudentGradeValidator from 'App/Validators/StudentGradeValidator'

export default class StudentGradesController {
  protected studentGradesService = new StudentGradesService()
  constructor() {
    this.studentGradesService = new StudentGradesService()
  }
  public async calculateAverage({ request }: HttpContextContract) {
    const payload = await request.validate(StudentGradeValidator)
    return this.studentGradesService.calculateAverage(payload)
  }
}
