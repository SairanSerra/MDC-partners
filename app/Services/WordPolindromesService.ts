export default class WordPolindromesService {
  public async checkWordIsPolindromes(word: string) {
    const wordInUpperCase = word.toLocaleUpperCase()
    const wordReverse = wordInUpperCase.split('').reverse().join('')

    const isPolindromes = wordReverse === wordInUpperCase
    return { isPolindromes: isPolindromes, word: wordInUpperCase, wordReverse: wordReverse }
  }
}
