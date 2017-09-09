import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ModuleConfig, ModuleNames, AppCommon, BaseModule } from "@app/common";
import { FormsModule } from "@angular/forms";
import { AuthRoute } from "./authRoute";
import routes from "./_share/config/route";
import ioc from "./_share/config/ioc";

/*login */
import { Login } from "./login/login";

@NgModule({
    imports: [FormsModule, AppCommon, AuthRoute],
    declarations: [Login],
    //exports: [Orders],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule extends BaseModule {
    constructor() {
        super(new ModuleConfig(ModuleNames.Auth, ioc, routes));
    }
}