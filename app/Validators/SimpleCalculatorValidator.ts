import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SimpleCalculatorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    firstNumber: schema.number(),
    secondNumber: schema.number(),
    operator: schema.enum(['PLUS', 'MINUS', 'TIMES', 'DIVIDED']),
  })

  public messages: CustomMessages = {}
}
