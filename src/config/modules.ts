import { ModuleNames, IModuleConfigItem } from "@app/common";
let modules: Array<IModuleConfigItem> = [
    { name: ModuleNames.Security, urlPrefix: ModuleNames.Security, path: ModuleNames.Security, isDefault: true,canActivate:true},
    { name: ModuleNames.Setting, urlPrefix: ModuleNames.Setting, path: ModuleNames.Setting,canActivate:true},
    { name: ModuleNames.Order, urlPrefix: ModuleNames.Order, path: ModuleNames.Order,canActivate:true},
    { name: ModuleNames.Auth, urlPrefix: ModuleNames.Auth, path: ModuleNames.Auth}
];
export default modules;