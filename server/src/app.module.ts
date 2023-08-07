import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

const mongoUrl = process.env.MONGO_URL;
@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(mongoUrl),
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
