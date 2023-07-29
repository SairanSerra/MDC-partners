import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WordPolidromeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    word: schema.string(),
  })

  public messages: CustomMessages = {}
}
