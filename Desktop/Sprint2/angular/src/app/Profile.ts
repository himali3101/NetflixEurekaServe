export class Profile{
    
     userId : number;
    private userName : string;
    private emailId : string;
    private password : string;
    private phoneNo : string;
    private userType : string;



    constructor( userId ,userName, emailId, phoneNo){
        this.userId = userId;
        this.userName = userName;
        this.emailId = emailId;
        this.phoneNo = phoneNo;
        
    }
}
