import setUpService from './setUpService';

function setupCropService(db) {
    const beforeHook = {};
    const afterHook = {};
    return setUpService(db, '/crops', 'crops', beforeHook, afterHook);
  }
  
  export default setupCropService;