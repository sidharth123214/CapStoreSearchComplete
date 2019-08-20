import { Product } from "./models/Product";
import { CapStoreSearchService } from "./app.CapStoreSearchService";
import { Component } from "@angular/core";

@Component({
    selector:'user-search',
    templateUrl:'user1Search.html'
})


export class User1SearchComponent{
    pr:Product
    constructor(private service:CapStoreSearchService){}

    productName:string;
    company:string;
    category:string;
    subcategory:string;
    ch=false;
    change()
    {
        this.ch=true;
    }
    
    findProductByName()
    {
      console.log(this.productName)
        this.service. findbyProductName(this.productName)
        .subscribe(
            res=>{
                this.pr=res
            },
            err=>{
                alert("an error has occurred")
            }
        )     
    }


    findProductByCompany()
    {
          this.service.findbyCompanyName(this.company).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
    }
    
    findProductByCategory()
        {
            this.service.findbyCategory(this.category).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
        }
    
    findProductBySubCategory()
        {
            this.service.findbySubCategory(this.subcategory).subscribe(res=>this.pr=res,err=>alert("an error has occured"))
        }
}