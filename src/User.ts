import crypto from "crypto"

export default class User{
  id?: string
  name: string
  username: string
  isProPlan: boolean
  todos?: string[]

  constructor({ id, name, username, isProPlan, todos }: User) {
    this.id = id
    this.name = name
    this.username = username
    this.isProPlan = isProPlan
    this.todos = todos
  }

  static create({ name, username, isProPlan }: User) {
    const id = crypto.randomUUID()
    return new User({ id, name, username, isProPlan, todos: [] })
  }
}
