import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create(AppModule, { cors: false });
    // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    // app.useGlobalInterceptors(
    //   new ClassSerializerInterceptor(app.get(Reflector)),
    // );
    app.enableCors({ credentials: true, origin: true });
    app.use(cookieParser());
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('API')
      .setDescription('TM API')
      .setVersion('0.1')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });

    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
