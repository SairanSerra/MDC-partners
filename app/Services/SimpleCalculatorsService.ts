import { SimpleCalculatorDto } from 'App/Dtos/Services/SimpleCalculatorDto'

export default class SimpleCalculatorsService {
  public async index({ firstNumber, operator, secondNumber }: SimpleCalculatorDto) {
    switch (operator) {
      case 'PLUS':
        return firstNumber + secondNumber
      case 'MINUS':
        return firstNumber - secondNumber
      case 'DIVIDED':
        return firstNumber / secondNumber
      case 'TIMES':
        return firstNumber * secondNumber
    }
  }
}
