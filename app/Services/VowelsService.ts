export default class VowelsService {
  public async countVowels(word: string) {
    const wordToUpperCase = word.toLocaleUpperCase()

    let countVowels = 0
    let index = 0
    const lengthWord = wordToUpperCase.length
    const vowels = ['A', 'E', 'I', 'O', 'U']

    for (index; index < lengthWord; index++) {
      const wordIncludeVowels = vowels.includes(wordToUpperCase[index])
      if (wordIncludeVowels) {
        countVowels++
      }
    }

    return { TotalVolwels: countVowels }
  }
}
