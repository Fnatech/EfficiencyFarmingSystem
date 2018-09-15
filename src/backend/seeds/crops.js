import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();
    const crops = [{
        name: 'Rice',
        phLevelRequired: 6.2
    }, {
        name: 'Wheat',
        phLevelRequired: 7.0
    }, {
        name: 'Corn',
        phLEvelRequired: 8.0
    }]

  const cropService = app.service("/crops");
  await cropService.remove(null);
  return Promise.all(crops.map(crop => cropService.create(crop)));
};

export default seed;
