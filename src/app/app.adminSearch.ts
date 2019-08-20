import { Merchant } from "./models/Merchant";
import { User1 } from "./models/User1";
import {CapStoreSearchService } from "./app.CapStoreSearchService";






export class adminSearchComponent{
    mr:Merchant;
    us:User1;
    constructor(private service:CapStoreSearchService){}
    merchantId:number;
    userId:number;
    ch=false;
    change()
    {
        this.ch=true;
    }



findMerchantById()
    {
          this.service.findMerchant(this.merchantId).subscribe(res=>this.mr=res,err=>alert("an error has occured"))
    }

findUserById()
    {
          this.service.findUser(this.merchantId).subscribe(res=>this.us=res,err=>alert("an error has occured"))
    }



}