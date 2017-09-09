import { BaseModel, ValidationException } from "@app/common";
export class LoginModel extends BaseModel {
    
    public Email: string = String.empty;
    public Pwd: string = String.empty;
    
    public import(item: any) {
        this.Email = item.Email;
        this.Pwd = item.Pwd;
    }

    // public constructor(item: any) {
    
    //     this.email = item.name;
    //     this.password = item.key;
    
    // }
}