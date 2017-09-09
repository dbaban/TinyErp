import {BaseService} from "./baseService";
import { Injectable} from "@angular/core";
import { PromiseFactory } from "../models/promise";
import { CACHE_CONSTANT } from "./cache/cacheService";
import { ICacheService } from "./cache/icacheService";
import { IAuthService } from "./iauthService";
import { IoCNames } from "../ioc/enum";

@Injectable()
export class AuthService{
    
  private  cacheService: ICacheService = window.ioc.resolve(IoCNames.ICacheService);

    public constructor() {
     }
     
    public isAuthorized(routeInstruction: any) {
        let profile = this.getUserProfile();
        return  this.isAuthenticated(profile);
    }
    public removeAuth(): void {
        this.cacheService.remove(CACHE_CONSTANT.USER_PROFILE);
        this.cacheService.remove(CACHE_CONSTANT.TOKEN);
    }
    public isAuthenticated(profile: any): boolean {
        return !!profile;
    }
    public setAuth(auth: any) {
        this.cacheService.set(CACHE_CONSTANT.USER_PROFILE, auth.profile);
        this.cacheService.set(CACHE_CONSTANT.TOKEN, auth.token);
        console.log("Token", this.cacheService.get(CACHE_CONSTANT.TOKEN));
    }
    public getAuth(): any {
        let auth: any = {
            profile: this.cacheService.get(CACHE_CONSTANT.USER_PROFILE),
            token: this.cacheService.get(CACHE_CONSTANT.TOKEN)
        };
        return auth;
    }
    public getUserProfile(): any {
        if (!this.cacheService.exist(CACHE_CONSTANT.USER_PROFILE)) {
            return null;
        }
        let userProfile = this.cacheService.get(CACHE_CONSTANT.USER_PROFILE);
        return userProfile;
    }
}