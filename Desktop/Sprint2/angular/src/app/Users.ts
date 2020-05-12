export class Users{
    
    userId : number;

    userName : string;
 
    password : string

    userType : string

    emailId : string
    

    constructor( userName, emailId){
        this.emailId = emailId;
        this.userName = userName;
        //this.userType = userType;
    
    }

    get username(): string {
        return this.userName;
    }
}