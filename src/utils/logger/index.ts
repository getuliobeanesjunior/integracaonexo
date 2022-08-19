import { createLogger, format, transports, Logger } from 'winston';

const logger: Logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'DD/MM/YYYY HH:mm:ss.SSS',
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true
    }),
  ],
  exitOnError: false,
});

export default logger;
