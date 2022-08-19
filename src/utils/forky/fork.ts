import { dirname } from 'path';
import { fork } from 'child_process';

export default (relativePath: String, options:any, cb: Function) => {
  const root = dirname(
    global.__dirname || require.main.filename || process.mainModule.filename,
  );

  const forkedProcess = fork(`${root}${relativePath}`);

  forkedProcess.on('message', (response) => {
    forkedProcess.kill('SIGKILL');

    if (cb) {
      cb(response);
    }
  });

  forkedProcess.send(options || {});
};
