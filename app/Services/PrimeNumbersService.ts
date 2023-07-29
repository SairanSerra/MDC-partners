export default class PrimeNumbersService {
  public async checkNumberIsPrime(number: number) {
    let index = 2
    const numberInt = parseInt(String(number))
    for (index; index < numberInt; index++) {
      const numberNotPrime = numberInt % index === 0
      if (numberNotPrime) {
        return false
      }
    }
    return true
  }

  public async listFirstTenNumberPrimes() {
    let number = 0
    let listNumberPrime = [] as number[]
    while (listNumberPrime.length <= 10) {
      const numberIsPrime = await this.checkNumberIsPrime(++number)

      if (numberIsPrime) {
        listNumberPrime.push(number)
      }

      number++
    }
    return listNumberPrime
  }
}
