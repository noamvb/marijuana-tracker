export interface Purchase {
    id: string;
    date: Date;
    amount: number;
    strain: string;
    price: number;
}

export interface ConsumptionLog {
    id: string;
    date: Date;
    amount: number;
    method: string;
    notes?: string;
}