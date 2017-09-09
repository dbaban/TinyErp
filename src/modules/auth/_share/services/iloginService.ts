import { Promise } from "@app/common";
export interface ILoginService {
    signIn(model: any): Promise;
}