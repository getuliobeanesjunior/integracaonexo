import { Logger } from "winston";

class ForkyInstance {

  private logger:Logger

  constructor(logger: Logger){
    this.logger = logger
  }

  catch = (err:any) => {
    this.disposeError(err);
  };

  disposeError = (err:any) => {
    this.logger.error(`${err.message}\n${err.stack}`);
  };

  exec = (func: Function) => {
    process.on('message', (opts: any) => {
      func(opts)
        .then((response: any) => process.send(response))
        .catch(this.catch);
    });
  };
}

export default (logger: Logger) => {
  return new ForkyInstance(logger);
};
