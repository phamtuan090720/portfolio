class PublicRoutes {
    private static _instance: PublicRoutes;
    constructor() {
        if (PublicRoutes._instance) {
            return PublicRoutes._instance;
        }
        PublicRoutes._instance = this;
    }
}
export default PublicRoutes;