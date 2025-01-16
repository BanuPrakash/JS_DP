import "reflect-metadata";
import { inject, injectable } from "inversify";

import BookRepository from './BookRepositoryInMemory';

@injectable()
export default class BookService {
    @inject("BookRepo")
    bookRepository: BookRepository;


    getBooks() {
        return this.bookRepository.getBooks();
    }
}

