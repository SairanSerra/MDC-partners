import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InvestimentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    initialInvestiment: schema.number(),
    totalMonths: schema.number(),
    interestRate: schema.number(),
  })

  public messages: CustomMessages = {}
}
