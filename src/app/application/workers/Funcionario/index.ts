// utils
import path from 'path';
import forkyBase from '../../../../utils/forky';

const funcionarioStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('/workers/Funcionario/worker' + path.extname(__filename), opts, cb);
  },
});

export default funcionarioStart;