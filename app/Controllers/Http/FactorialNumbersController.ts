import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FactorialNumberService from 'App/Services/FactorialNumberService'
import FactorialNumberValidator from 'App/Validators/FactorialNumberValidator'

export default class FactorialNumbersController {
  protected factorialNumberService = new FactorialNumberService()
  constructor() {
    this.factorialNumberService = new FactorialNumberService()
  }

  public async calculateFactorial({ request }: HttpContextContract) {
    const payload = await request.validate(FactorialNumberValidator)
    return this.factorialNumberService.calculateFactorial(payload.number)
  }

  public async stepCalculateFactorial({ request }: HttpContextContract) {
    const payload = await request.validate(FactorialNumberValidator)
    return this.factorialNumberService.stepCalculateFactorial(payload.number)
  }
}
