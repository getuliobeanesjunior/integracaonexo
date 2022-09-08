// utils
import path from 'path';
import forkyBase from '../../../../utils/forky';

const cargoStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Cargo\\worker' + path.extname(__filename), opts, cb);
  },
});

export default cargoStart;