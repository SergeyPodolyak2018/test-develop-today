import app from './app';
import { PORT, BASE_URI } from './const';

const port = PORT;
app.listen(port, () =>
  console.info(`App is running on port ${port}...${BASE_URI}`)
);