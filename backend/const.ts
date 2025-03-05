import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const PORT = process.env['PORT'];
const BASE_URI = process.env['BASE_URI'] || '';
const UI_URI = process.env['UI_URI'] || '';
const EXTERNAL_API = 'https://www.themealdb.com/api/json/v1/1';

export { PORT, BASE_URI, UI_URI, EXTERNAL_API };
