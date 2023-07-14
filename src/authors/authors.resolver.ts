import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from '../types/graphql';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Mutation('createAuthor')
  async createAuthor(@Args('input') input: Author) {
    return this.authorsService.create(input);
  }

  @Mutation('removeAuthor')
  async removeAuthor(@Args('id') id: number) {
    return this.authorsService.remove(id);
  }

  @Query('getAuthor')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findById(id);
  }

  @Query('getAllAuthors')
  async getAllAuthors() {
    return this.authorsService.findAll();
  }
}
