export interface Items {
    price: string;
    location: string;
    refine: string;
    property?: string;
    qty?: string;
}

export interface Orders {
    location?: string;
    property: number;
    price: number;
    refine: number;
    qty?: string;
}

export interface Datum {
    items: Items;
    orders: Orders;
}

export interface ItemCacheResponse {
    data: Datum[];
}