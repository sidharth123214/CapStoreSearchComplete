import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import{Product} from './models/Product';
import{Merchant} from './models/Merchant';
import{User1} from './models/User1';

let baseUrl="http://localhost:5001/CapStoreSearch";

@Injectable({
    providedIn:'root'
})


    export class CapStoreSearchService{
        constructor(private http:HttpClient){}
    
        pr:Product;
    

    findbyProductId(productID:Number){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findByProductId/"+productID,options);
    }

    findbyProductName(productName:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findByProductName/"+productName,options);
    }

    findbyCompanyName(company:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findByCompanyName/"+company,options);
    }

    findbyCategory( category:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findByCategory/"+category,options);
    }

    findbySubCategory( subcategory:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findBySubCategory/"+subcategory,options);
    }

    findMerchant(merchantId:number){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Merchant>(baseUrl+"findMerchant/"+ merchantId,options);
    }

    findUser(userId:number){
        let options={"headers":
        new HttpHeaders({"Content-Type":"application/json"})};
        return this.http.get<User1>(baseUrl+"findUser/"+ userId,options);
    }

    findWithMerchantId(merchantId:number){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantId/"+ merchantId,options);
    }

    findWithMerchantIdAndProductId(merchantId:number,productID:Number){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantIdAndProductId/"+ merchantId+"/"+productID,options);
    }

    findWithMerchantIdAndProductName(merchantId:number,productName:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantIdAndProductName/"+ merchantId+"/"+productName,options);
    }

    findWithMerchantIdAndCompany(merchantId:number,company:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantIdAndProductId/"+ merchantId+"/"+company,options);
    }

    findWithMerchantIdAndCategory(merchantId:number,category:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantIdAndCategory/"+ merchantId+"/"+category,options);
    }

    findWithMerchantIdAndSubCategory(merchantId:number,subcategory:string){
        let options={"headers":
    new HttpHeaders({"Content-Type":"application/json"})};
    return this.http.get<Product>(baseUrl+"findWithMerchantIdAndSubCategory/"+ merchantId+"/"+subcategory,options);
    }

    }















    









