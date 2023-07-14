
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AuthorInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export interface Author {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export interface RemoveAuthor {
    id?: Nullable<number>;
}

export interface IQuery {
    getAuthor(authorId?: Nullable<number>): Nullable<Author> | Promise<Nullable<Author>>;
    getAllAuthors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
}

export interface IMutation {
    createAuthor(input: AuthorInput): Nullable<Author> | Promise<Nullable<Author>>;
    removeAuthor(id?: Nullable<number>): Nullable<RemoveAuthor> | Promise<Nullable<RemoveAuthor>>;
}

type Nullable<T> = T | null;
