// utils
import forkyBase from '../../../../utils/forky';

const empresaStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Empresa\\worker.ts', opts, cb);
  },
});

export default empresaStart;