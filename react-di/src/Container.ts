import { container } from "tsyringe";
import type UserService from "./services/UserService";
import ApiUserService from "./services/ApiUserService";
// import MockUserService from "./services/MockUserService";

container.register<UserService>("UserService",{ useClass: ApiUserService});

//  container.register<UserService>("UserService",{ useClass: MockUserService});