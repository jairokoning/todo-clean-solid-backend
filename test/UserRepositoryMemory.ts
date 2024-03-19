import User from "../src/User";
import UserRepository from "../src/UserRepository";

export default class UserRepositoryMemory implements UserRepository {
  USERS: User[] = [];
  async save(user: User): Promise<void> {
    this.USERS.push(user);
  }
}