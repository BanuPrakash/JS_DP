import { injectable } from "tsyringe";
import Repo from "./Repo";

@injectable()
export default class BookRepository implements Repo{
    books = [
        {id: 1, name : "B1"},
        {id: 2, name : "B2"}
    ]

    getBooks() {
        return this.books;
    }
}