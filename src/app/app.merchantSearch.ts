import { Product } from "./models/Product";
import { CapStoreSearchService } from "./app.CapStoreSearchService";
import { Component } from "@angular/core";

@Component({
    selector:'merchant-inventory',
    templateUrl:'merchant.html'

})

export class merchantSearchComponent{
    pr:Product
    constructor(private service:CapStoreSearchService){}
productID:number;
productName:string;
company:string;
category:string;
subcategory:string;
merchantId:number;

ch=false;
change()
{
    this.ch=true;
}



findAllbyMerchantId()
{
      this.service.findWithMerchantId(this.merchantId).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
}

findProductsbyMerchantIdAndProductId()
{
      this.service.findWithMerchantIdAndProductId(this.productID,this.merchantId).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
}

findProductsbyMerchantIdAndProductName()
{
      this.service.findWithMerchantIdAndProductName(this.merchantId,this.productName).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
}

findProductsbyMerchantIdAndCategory()
{
      this.service.findWithMerchantIdAndCategory(this.merchantId,this.category).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
}

findProductsbyMerchantIdAndSubCategory()
{
      this.service.findWithMerchantIdAndSubCategory(this.merchantId,this.subcategory).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
}

}