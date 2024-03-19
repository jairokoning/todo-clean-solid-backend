import User from "./User"
import UserRepository from "./UserRepository"

export default class CreateUser {
  constructor(readonly userRepository: UserRepository) {}
  async execute({ name, username, isProPlan }: UserInput): Promise<void> {
    const user = User.create({ name, username, isProPlan })
    await this.userRepository.save(user)
  }
}

type UserInput = {
  name: string
  username: string
  isProPlan: boolean, 
}