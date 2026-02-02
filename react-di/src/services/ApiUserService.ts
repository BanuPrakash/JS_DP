import { injectable } from "tsyringe";
import type UserService from "./UserService";

@injectable()
export default class ApiUserService implements UserService {
    getUser()  {
        // axios , fetch
        return "Banu Prakash from API";
    }
}