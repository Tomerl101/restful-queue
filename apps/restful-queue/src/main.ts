/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as bodyParser from 'body-parser';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { QueueModule } from './queue/queue.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueModule, { bodyParser: false });
  const port = process.env.PORT || 3333;


  // app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
  // app.use(bodyParser.json({ verify: rawBodyBuffer }));
  // app.use(bodyParser.raw({ verify: rawBodyBuffer, type: '*/*' }));
  // app.use(bodyParser.raw({ type: 'application/*+json' }));
  app.use(bodyParser.text({ type: 'text/plain' }))
  app.use(bodyParser.json({ type: 'application/json' }))


  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}}`
  );
}

bootstrap();
