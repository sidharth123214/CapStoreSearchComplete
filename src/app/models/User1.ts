export class User1{
    userId:number;
    firstName:string;
    lastName:string;
    password:string;
    mobileNo:number;
    emailid:string;
    address:string;
    photo:string;

    public User1( emailid,  firstName,  lastName,  password,  mobileNo,
         address, photo) {
    
    this.emailid = emailid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.mobileNo = mobileNo;
    this.address = address;
    this.photo = photo;
}
}