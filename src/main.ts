/// <reference path="extension.d.ts" />
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Application } from "./application";
import helperFacade from "@app/common";
import appConfig from "./config/appConfig";
import { AuthGuard,AuthService } from "@app/common";
//import { APP_ROUTER_PROVIDERS } from "@angular/router";

// The job of main.ts is to boostrap the application. 
// It loads everything and controls the startup of the application.
helperFacade.iocHelper.configIoC(appConfig).then(() => {
    helperFacade.appHelper.setConfig(appConfig);
    platformBrowserDynamic().bootstrapModule(Application);// execute the boostrapModule function and pass it the name of the module to be boostrapped
});