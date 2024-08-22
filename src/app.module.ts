import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostService } from './post.service';

@Module({
  imports: [PrismaModule, ],
  controllers: [AppController],
  providers: [AppService, UserService, PostService],
})
export class AppModule {}
