import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import InvestmentsService from 'App/Services/InvestmentsService'
import InvestimentValidator from 'App/Validators/InvestimentValidator'

export default class InvestmentsController {
  protected investmentsService = new InvestmentsService()
  constructor() {
    this.investmentsService = new InvestmentsService()
  }
  public async calculateInvestment({ request }: HttpContextContract) {
    const payload = await request.validate(InvestimentValidator)
    return this.investmentsService.calculateInvestment(payload)
  }
}
