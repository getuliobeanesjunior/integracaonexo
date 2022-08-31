// utils
import forkyBase from '../../../../utils/forky';

const funcionarioStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Funcionario\\worker.ts', opts, cb);
  },
});

export default funcionarioStart;