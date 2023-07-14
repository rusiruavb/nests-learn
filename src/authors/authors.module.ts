import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';

@Module({
  imports: [],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorModule {}
