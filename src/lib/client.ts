import axios, { AxiosInstance } from 'axios';
import { Datum, ItemCacheResponse } from './response';
import * as chalk from 'chalk'

export class NovaClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://www.novaragnarok.com'
        })
    }

    async getHistory(itemId: number) {
        return this.client.get<ItemCacheResponse>(`data/cache/ajax/history_${itemId}.json`)
            .then(q => q.data)
            .then(q => q.data.map(normalizeDatum))
    }

    async getLive(itemId: number) {
        return this.client.get<ItemCacheResponse>(`data/cache/ajax/item_${itemId}.json`)
            .then(q => q.data)
            .then(q => q.data.map(normalizeDatum))
    }
}

function normalizeDatum(datum: Datum) {
    return ({
        date: datum.items.date ?? undefined,
        qty: datum.orders.qty || 1,
        price: numberWithCommas(datum.orders.price),
        refine: datum.orders.refine || 0,
        location: datum.orders.location?.replace(/\n/g, ''),
        property: parseProperty(datum.items.property)
    })
}

function parseProperty(property: string | undefined) {
    if (!property) return 'N/A';
    const table = property.match(/(?<=\<td[^>]*>)(.*?)(?=\<\/td>)/g)
    if (!table) return 'N/A';
    return table[0]
        .split(',')
        .map(q => q.trim())
        .reduce((prev: string[], curr) => {
            const prop = curr.match(/(?<=\<a[^>]*>)(.*?)(?=\<\/a>)/g)
            if (prop) prev.push(prop[0]);
            return prev;
        }, [])
        .join(',')
}

function numberWithCommas(x: number) {
    const val = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (x > 100000000) {
        return chalk.magenta.bold(val)
    }
    else if (x > 10000000) {
        return chalk.green.bold(val)
    }
    else {
        return chalk.bold(val)
    }
}