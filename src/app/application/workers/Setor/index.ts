// utils
import forkyBase from '../../../../utils/forky';

const turnoStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Setor\\worker.ts', opts, cb);
  },
});

export default turnoStart;