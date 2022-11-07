import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { dataSource } from '../typeorm';

dataSource.initialize().then(() => {
  const server = app.listen(process.env.PORT || 3333, () => {
    console.log(
      `🟢 SERVER ON 🟢 -> Server start on port  ${
        process.env.PORT || 3333
      }! 🏆`,
    );
  });
});
