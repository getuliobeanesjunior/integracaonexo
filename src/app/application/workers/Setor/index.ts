// utils
import forkyBase from '../../../../utils/forky';

const setorStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Setor\\worker.ts', opts, cb);
  },
});

export default setorStart;