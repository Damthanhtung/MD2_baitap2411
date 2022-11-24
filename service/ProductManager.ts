import {Product} from "../model/Product";
export class ProductManager {
    listProduct: Product[] = [];
    add(product: Product) :void {
        this.listProduct.push(product);
    }
    edit(id: number, productEdit: Product) :void {
        for (let i =0; i<this.listProduct.length; i++) {
            if (this.listProduct[i].id===id) {
                this.listProduct[i] = productEdit;
            }
        }

    }
    findById(id: number) :number{
        for (let i=0; i<this.listProduct.length; i++) {
            if (id===this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    }
    findTheApproximateName(t: string) {
        //@ts-ignore
        return this.listProduct.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }
    remove(id: number) :void {
        let index = this.findById(id);
        if (index===-1) {
            console.log("Không có");
        }
        else {
            this.listProduct.splice(index,1);
        }
    }
    findByPrice(a: number,b: number)  {
        let result = this.listProduct.filter(product => a <= product.price && product.price <= b);
        return result;
    }
    findByCompany(company: string ){
        let result = this.listProduct.filter(product => product.company===company);
        return result;
    }
    sortPriceUp() {
        let result = this.listProduct.slice().sort((a, b)=>a.price - b.price);
        return result;

    }
    sortPriceDown() {
        let result = this.listProduct.slice().sort((a,b)=>b.price-a.price )
            return result;
        }
     sortAmountDown(){
        let result = this.listProduct.slice().sort( (a,b) =>b.amount - a.amount )
            return result;
     }
}
