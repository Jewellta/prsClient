import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request{
    id:number=0;
    description:string="";
    justification:string="";
    rejectionReason:string="";
    deliveryMode:string="Pickup";
    status:string="Review";
    total:number=1;
    userId:number=0;
    user:User=null;
    requestLines:Requestline[]=[];
}