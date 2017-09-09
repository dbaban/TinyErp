import { IoCNames, BaseService, Promise, IConnector } from "@app/common";
import { ILoginService } from "./iloginService";
export class LoginService extends BaseService implements ILoginService {
    public signIn(model: any): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        debugger;
        let url = "users/signin";
        return iconnector.post(this.resolve(url), model);
    }
}