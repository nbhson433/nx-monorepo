// Default
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// Express
import { Todo } from '@nx-monorepo/data';
import * as express from 'express';

// Default
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }
// bootstrap();


// Express
const app = express();
const todos: Todo[] = [
  {
    title: 'Login page is broken'
  },
  {
    title: 'Everything is broken'
  }
];
app.get('/api/todos', (req, res) => {
  res.send(JSON.stringify(todos));
});
app.post('/api/addTodo', (req, res) => {
  todos.push({
    title: `New todo ${Math.floor(Math.random() * 1000)}`,
  });
  res.send(JSON.stringify(todos));
})
const port = 3333;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
