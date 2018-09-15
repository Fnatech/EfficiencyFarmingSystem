import setupService from './setupService';
import beforeInsertHook from '../hooks/beforeInsertHook';

function setupSoilService(db) {
  const beforeHook = {
    create: [beforeInsertHook()]
  };
  const afterHook = {};
  return setupService(db, '/soil', 'soil', beforeHook, afterHook);
}

export default setupSoilService;
