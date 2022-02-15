import { Command } from '@oclif/core'
import { NovaClient } from './lib/client'

export abstract class BaseCommand extends Command {
    get market() {
        return new NovaClient();
    }
}