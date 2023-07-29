import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { SimpleCalculatorDto } from 'App/Dtos/Services/SimpleCalculatorDto'
import SimpleCalculatorsService from 'App/Services/SimpleCalculatorsService'
import SimpleCalculatorValidator from 'App/Validators/SimpleCalculatorValidator'

export default class SimpleCalculatorsController {
  protected simpleCalculatorsService = new SimpleCalculatorsService()

  constructor() {
    this.simpleCalculatorsService = new SimpleCalculatorsService()
  }

  public async index({ request }: HttpContextContract) {
    const payload = (await request.validate(
      SimpleCalculatorValidator
    )) as unknown as SimpleCalculatorDto

    return this.simpleCalculatorsService.index(payload)
  }
}
