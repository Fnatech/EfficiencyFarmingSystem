import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();
    const crops = [{
        name: 'Rice',
        minRangePhLevel: 4.5,
        maxRangePhLevel: 7.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Wheat',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 7.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Corn',
        minRangePhLevel: 5.5,
        maxRangePhLevel: 7.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Carrot',
        minRangePhLevel: 5.5,
        maxRangePhLevel: 7.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Cabbage',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 7.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Potato',
        minRangePhLevel: 4.8,
        maxRangePhLevel: 6.5,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Banana',
        minRangePhLevel: 5.5,
        maxRangePhLevel: 6.5,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }, {
        name: 'Yam',
        minRangePhLevel: 6.0,
        maxRangePhLevel: 8.0,
        img: 'http://pngimg.com/uploads/tomato/tomato_PNG12596.png'
    }]
  const cropService = app.service("/crops");
  await cropService.remove(null);
  return Promise.all(crops.map(crop => cropService.create(crop)));
};

export default seed;
