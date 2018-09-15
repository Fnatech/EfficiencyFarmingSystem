import soilService from './soil';
import cropService from './crop';

function setUpAllServices(db){
    return function() {
        const app = this;
        app
            .configure(soilService(db))
            .configure(cropService(db))
    }
}

export default setUpAllServices;