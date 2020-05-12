export class SignUpModel{
    
    userId : number;

    userName : string;
 
    password : string

    userType : string;    

    constructor( userName, password, userType){
        this.password = password;
        this.userName = userName;
        this.userType = userType;
    
    }
}