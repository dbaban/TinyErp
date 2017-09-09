let routes: any = getRoute();
export default routes;
function getRoute() {
    let route: any = {
        login: {
            logins: {
                name: "auth.login.logins",
                path: "logins"
            }
        }
    };
    return route;
}