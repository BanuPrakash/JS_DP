import  { injectable } from "tsyringe";
import type UserService from "./UserService";

@injectable()
export default class MockUserService implements UserService {
    getUser()  {
        return "Mock User from API";
    }
}