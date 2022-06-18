import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [],
  providers: [PostsResolver, PrismaService],
})
export class PostsModule {}
