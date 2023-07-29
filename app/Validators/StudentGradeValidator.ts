import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StudentGradeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    firstSubjectGrade: schema.number(),
    secondSubjectGrade: schema.number(),
    thirdSubjectGrade: schema.number(),
  })

  public messages: CustomMessages = {}
}
