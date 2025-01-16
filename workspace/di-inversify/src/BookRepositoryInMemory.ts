import "reflect-metadata";
import { injectable } from "inversify";
import  BookRepository  from "./BookRepository";

@injectable()
export default class BookRepositoryInMemory implements BookRepository {
    books = [
      { id: 1, name: 'The Pragmatic Programmer' },
      { id: 2, name: 'Poems that Solve Puzzles' },
    ];
  
    getBooks() {
      return this.books;
    }
  }
