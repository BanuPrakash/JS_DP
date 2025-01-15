import { injectable } from "tsyringe";
import Repo from "./Repo";
import BookRepository from "./BookRepository";


@injectable()
export default class BookService {
    // BookRepository could have been an interface
    bookRepo: BookRepository;

    // Constructor DI
    constructor(bookRepo: BookRepository) {
        this.bookRepo = bookRepo;
    }
    getBooks() {
        return this.bookRepo.getBooks();
    }
}