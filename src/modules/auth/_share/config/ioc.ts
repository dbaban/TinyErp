import { IoCNames, IoCLifeCycle } from "@app/common";
import { LoginService } from "@app/auth";
let ioc = [
    { name: IoCNames.ILoginService, instance: LoginService, lifeCycle: IoCLifeCycle.Singleton }
];
export default ioc;