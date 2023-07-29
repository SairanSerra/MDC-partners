export default class FactorialNumberService {
  public async calculateFactorial(number: number) {
    let index = 0
    let arrayNumberFactorial = [] as number[]

    const reducer = (accumulator: number, currentValue: number) => accumulator * currentValue

    for (index; index < number; index++) {
      const numberFactorial = parseInt(String(number)) - index
      arrayNumberFactorial.push(numberFactorial)
    }
    const resultFactorial = arrayNumberFactorial.reduce(reducer)
    return resultFactorial
  }

  public async stepCalculateFactorial(number: number) {
    let labelStep = ''
    let index = 0

    for (index; index < number; index++) {
      const numberFactorial = String(parseInt(String(number)) - index)
      const labelIsEmpty = labelStep === ''
      const labelNotEmpty = !labelIsEmpty
      if (labelIsEmpty) {
        labelStep = numberFactorial
      }
      if (labelNotEmpty) {
        labelStep += ` x ${numberFactorial}`
      }
    }
    const result = await this.calculateFactorial(number)
    return `${labelStep} = ${result}`
  }
}
