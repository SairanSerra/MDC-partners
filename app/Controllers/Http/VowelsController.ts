import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VowelsService from 'App/Services/VowelsService'
import VowelValidator from 'App/Validators/VowelValidator'

export default class VowelsController {
  protected vowelsService = new VowelsService()

  constructor() {
    this.vowelsService = new VowelsService()
  }

  public async countVowels({ request }: HttpContextContract) {
    const payload = await request.validate(VowelValidator)
    return this.vowelsService.countVowels(payload.word)
  }
}
