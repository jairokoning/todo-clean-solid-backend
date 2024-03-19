import CreateUser from "../src/CreateUser"
import UserRepositoryMemory from "./UserRepositoryMemory"

test("should create new user", async () => {
  const inputCreateUser = {
    name: "John Doe",
    username: "john",
    isProPlan: false
  }
  const userRepository: UserRepositoryMemory = new UserRepositoryMemory()
  const createUser = new CreateUser(userRepository)
  await createUser.execute(inputCreateUser)    
  expect(userRepository.USERS[0].id).toBeDefined()
  expect(userRepository.USERS[0].name).toBe(inputCreateUser.name)
  expect(userRepository.USERS[0].username).toBe(inputCreateUser.username)
  expect(userRepository.USERS[0].isProPlan).toBe(inputCreateUser.isProPlan)
})