// utils
import path from 'path';
import forkyBase from '../../../../utils/forky';

const turnoStart = (module.exports = {
  run(opts = {}, cb = () => {}) {
    forkyBase.fork('\\workers\\Turno\\worker' + path.extname(__filename), opts, cb);
  },
});

export default turnoStart;