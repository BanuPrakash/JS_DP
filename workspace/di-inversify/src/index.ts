import "reflect-metadata";
import { Container } from "inversify";

import BookController from './BookController';
import BookService from "./BookService";
import BookRepositoryInMemory from "./BookRepositoryInMemory";

const container = new Container();

container.bind("BookRepo").to(BookRepositoryInMemory).inSingletonScope();

container.bind("BookService").to(BookService).inSingletonScope();

container.bind("BookController").to(BookController).inTransientScope();

let books = container.resolve(BookController).getBooks();
books.forEach(book => console.log(book));
