import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import WordPolindromesService from 'App/Services/WordPolindromesService'
import WordPolidromeValidator from 'App/Validators/WordPolidromeValidator'

export default class WordPolindromesController {
  protected wordPolindromesService = new WordPolindromesService()

  constructor() {
    this.wordPolindromesService = new WordPolindromesService()
  }

  public async checkWordIsPolindrome({ request }: HttpContextContract) {
    const payload = await request.validate(WordPolidromeValidator)
    return this.wordPolindromesService.checkWordIsPolindromes(payload.word)
  }
}
