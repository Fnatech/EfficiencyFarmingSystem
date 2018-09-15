import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();
    const crops = [{
        name: 'Rice',
        minRangePhLevel: 4.5,
        maxRangePhLevel: 7.0,
    }, {
        name: 'Wheat',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 7.0,
    }, {
        name: 'Corn',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 7.0,
    }, {
        name: 'Carrot',
        minRangePhLevel: 5.5,
        maxRangePhLevel: 7.0,
    }, {
        name: 'Cabbage',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 7.0,
    }, {
        name: 'Potato',
        minRangePhLevel: 4.8,
        maxRangePhLevel: 6.5,
    }]
  const cropService = app.service("/crops");
  await cropService.remove(null);
  return Promise.all(crops.map(crop => cropService.create(crop)));
};

export default seed;
