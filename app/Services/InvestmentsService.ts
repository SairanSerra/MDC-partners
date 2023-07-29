import { InvestimentoCalculatorDto } from 'App/Dtos/Services/InvestimentCalculatorDto'

export default class InvestmentsService {
  public async calculateInvestment({
    interestRate,
    initialInvestiment,
    totalMonths,
  }: InvestimentoCalculatorDto) {
    const monthlyInterestRate = interestRate / 100 / 12
    const finalValue = initialInvestiment * Math.pow(1 + monthlyInterestRate, totalMonths)
    return finalValue.toFixed(2)
  }
}
