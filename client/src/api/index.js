import config from '../../app.config.json';

export const { API_HOST } = config;
export const { API_PORT } = config;
export const { API_PROTOCOL } = config;
export const BASE_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;
