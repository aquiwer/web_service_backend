import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('The Match API')
    .setBasePath('http://localhost:9000/match')
    .setDescription('The Match API description')
    .setVersion('1.0')
    .addTag('match')
    .addServer('http://localhost:9000')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(PORT, async () =>
    console.log(`[server]: Working on host ${await app.getUrl()}`),
  );
}

bootstrap();
