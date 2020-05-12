export class User{
    
    userId : number;

    userName : string;
 
    password : string

    userType : string

    emailId : string
    

    constructor( userName, password){
        this.password = password;
        this.userName = userName;
        //this.userType = userType;
    
    }

    get username(): string {
        return this.userName;
    }
}