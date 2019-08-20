export class Merchant{
    merchantId:number;
    firstName:string;
    lastName:string;
    company:string;
    emailid:string;
    mobileno:number;
    password:string;
    photo:string;
    rating:number;
    status:string;
    public Merchant( firstName,  lastName, company, emailid,  mobileno, password,
         photo,  rating,  status) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.emailid = emailid;
    this.mobileno = mobileno;
    this.password = password;
    this.photo = photo;
    this.rating = rating;
    this.status = status;
}
}