import { Flags, CliUx } from '@oclif/core'
import { BaseCommand } from '../command'
import { MarketInfo } from '../types'

export default class History extends BaseCommand {
  static description = 'Check transaction history of an item'

  static examples = [
    '<%= config.bin %> <%= command.id %> 6635',
  ]

  static flags = {
    // flag with no value (-f, --force)
    top: Flags.integer({ char: 't', description: 'top', default: 10 }),
    filter: Flags.string({ char: 'f', description: 'filter properties i.e novamarket history [itemid] -f refine=9' })
  }

  static args = [{ name: 'itemId', required: true, description: 'Id of the item to search' }]

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(History)

    const { itemId } = args;
    let response = await this.market.getLive(itemId);
    if(flags.filter) {
      if(!flags.filter.includes('=')) {
        this.error('invalid filter format', {
          suggestions: [
            `novamarket history ${itemId} -f refine=9`,
            `novamarket history ${itemId} -f property=fatal`
          ]
        })
      }
      const filter = flags.filter.split('=')
      const key = (filter[0] as keyof MarketInfo)
      const value = filter[1]
      response = response.filter(q => (q[key] as string)?.toString()?.toLowerCase().includes(value?.toLowerCase()))
    }
    response = response.slice(0, flags.top);
    CliUx.ux.table(response, {
      price: {},
      qty: {},
      refine: {},
      property: {}
    })
  }
}
