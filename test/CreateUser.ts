import CreateUser from "../src/CreateUser"

test("should create new user", async () => {
  const inputCreateUser = {
    name: "John Doe",
    username: "john",
    isProPlan: false
  }
  const createUser = new CreateUser()
  await createUser.execute(inputCreateUser)    
})