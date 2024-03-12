export default class CreateUser {
  async execute({ name, username, isProPlan }: UserInput): Promise<void> {}
}

type UserInput = {
  name: string,
  username: string,
  isProPlan: boolean,  
}