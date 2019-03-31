import config from '../../app.config.json';

export const { HOST } = config;
export const { PORT } = config;
export const BASE_URL = `${config.HOST}:${config.PORT}`;
