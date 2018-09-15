import setupService from './setupService';

function setupCropService(db) {
    const beforeHook = {};
    const afterHook = {};
    return setupService(db, '/crops', 'crops', beforeHook, afterHook);
  }
  
  export default setupCropService;