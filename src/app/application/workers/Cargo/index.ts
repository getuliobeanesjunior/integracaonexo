// utils
import forkyBase from '../../../../utils/forky';

const cargoStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Cargo\\worker.ts', opts, cb);
  },
});

export default cargoStart;