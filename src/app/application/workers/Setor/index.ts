// utils
import path from 'path';
import forkyBase from '../../../../utils/forky';

const setorStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('/workers/Setor/worker' + path.extname(__filename), opts, cb);
  },
});

export default setorStart;