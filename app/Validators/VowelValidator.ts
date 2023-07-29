import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VowelValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    word: schema.string(),
  })

  public messages: CustomMessages = {}
}
