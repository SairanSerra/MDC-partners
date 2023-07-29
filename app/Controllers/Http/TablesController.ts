import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TableService from 'App/Services/TableService'
import TableValidator from 'App/Validators/TableValidator'

export default class TablesController {
  protected tableService = new TableService()
  constructor() {
    this.tableService = new TableService()
  }
  public async table({ request }: HttpContextContract) {
    const payload = await request.validate(TableValidator)
    return this.tableService.table(payload.number)
  }
}
