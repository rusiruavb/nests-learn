import { Injectable } from '@nestjs/common';
import { Author, RemoveAuthor } from '../types/graphql';

@Injectable()
export class AuthorsService {
  private readonly authors: Array<Author> = [];

  create(author: Author): Author {
    author.id = this.authors.length + 1;
    this.authors.push(author);
    return author;
  }

  findAll(): Author[] {
    return this.authors;
  }

  findById(id: number): Author {
    return this.authors.find((author) => author.id === id);
  }

  remove(id: number): RemoveAuthor {
    const newAuthors = this.authors.filter((author) => author.id !== id);
    this.authors.splice(0, this.authors.length);
    newAuthors.forEach((author) => this.authors.push(author));
    return { id };
  }
}
