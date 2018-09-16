import setUpService from './setUpService';
import beforeInsertHook from '../hooks/beforeInsertHook';

function setupSoilService(db) {
  const beforeHook = {
    create: [beforeInsertHook()]
  };
  const afterHook = {};
  return setUpService(db, '/soil', 'soil', beforeHook, afterHook);
}

export default setupSoilService;
