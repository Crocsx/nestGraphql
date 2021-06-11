import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.use(
    // if it shows deprecated, it's a problem with syntax highlighting.
    // bodyParser() is deprecated.
    // bodyParser.json() is not
    bodyParser.json({
      verify: (req, res, buffer) => {
        if (buffer && buffer.length) {
          req['rawBody'] = buffer.toString('utf8');
        }
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
