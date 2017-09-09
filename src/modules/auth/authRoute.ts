import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Login } from "./login/login";
import routes from "./_share/config/route";

let routeConfigs: Routes = [
    { path: "", redirectTo: routes.login.logins.path, pathMatch: "full" },
    { path: routes.login.logins.path, component: Login}
];

@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: [RouterModule],

})
export class AuthRoute { }