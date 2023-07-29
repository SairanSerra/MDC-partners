import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PrimeNumbersService from 'App/Services/PrimeNumbersService'
import PrimeNumberValidator from 'App/Validators/PrimeNumberValidator'

export default class PrimeNumberController {
  protected primeNumbersService = new PrimeNumbersService()
  constructor() {
    this.primeNumbersService = new PrimeNumbersService()
  }
  public async checkNumberIsPrime({ request }: HttpContextContract) {
    const payload = await request.validate(PrimeNumberValidator)
    return this.primeNumbersService.checkNumberIsPrime(payload.number)
  }
  public async listFirstTenNumberPrimes() {
    return await this.primeNumbersService.listFirstTenNumberPrimes()
  }
}
