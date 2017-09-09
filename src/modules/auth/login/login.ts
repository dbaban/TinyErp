import {Component, ElementRef,Injectable,OnInit} from '@angular/core';
import { BasePage, PageAction, IoCNames, PageDropdownAction, AuthService} from "@app/common";
import { LoginModel } from "./loginModel";
import { ILoginService } from "@app/auth";
import { Router} from '@angular/router';

@Component({
    templateUrl: "src/modules/auth/login/login.html"
})

export class Login extends BasePage<LoginModel>{
    constructor(private _authService:AuthService) {
        super();
        let self = this;
        self.model = new LoginModel(); 
    }
    public login(event: any): void {
        debugger;
        this._authService.removeAuth();
        let self = this;
        let loginService: ILoginService = window.ioc.resolve(IoCNames.ILoginService);
        if (!this.model.validated()) { return; }
        loginService.signIn(this.model).then(function (items:any) {
            debugger;
         // self._authService.setAuth(item);
         // this.router.navigate(['/security/permissions']);
        }).error(function (items:any) {
            debugger;
         // self._authService.setAuth(item);
         // this.router.navigate(['/security/permissions']);
        }).reject(function () {
            debugger;
         // self._authService.setAuth(item);
         // this.router.navigate(['/security/permissions']);
        }).resolve(function () {
            debugger;
         // self._authService.setAuth(item);
         // this.router.navigate(['/security/permissions']);
        });
    }

    
}