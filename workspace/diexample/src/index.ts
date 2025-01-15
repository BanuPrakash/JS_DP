import 'reflect-metadata'

import {container} from 'tsyringe'

import BookController from './BookController'

let books = container.resolve(BookController).getBooks();
console.log(books);