export default class TableService {
  public async table(number: number) {
    let index = 1
    const limitTable = 10
    let tableResult = [] as string[]
    const numberInt = parseInt(String(number))

    for (index; index <= limitTable; index++) {
      tableResult.push(`${index} X ${numberInt} = ${index * numberInt}`)
    }
    return tableResult
  }
}
