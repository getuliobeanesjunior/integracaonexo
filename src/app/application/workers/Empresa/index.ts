// utils
import path from 'path';
import forkyBase from '../../../../utils/forky';

const empresaStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('/workers/Empresa/worker' + path.extname(__filename), opts, cb);
  },
});

export default empresaStart;