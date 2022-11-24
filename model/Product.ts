export class Product {
    private _id !: number;
    private _name !:string;
    private _price !: number;
    private _amount !: number;
    private _company !: string;

    constructor(id: number,name: string, price: number, amount: number, company: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._company = company;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get company(): string {
        return this._company;
    }

    set company(value: string) {
        this._company = value;
    }

}

