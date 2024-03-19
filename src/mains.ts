import CreateUser from "./CreateUser"
import CreateUserController from "./CreateUserController"
import ExpressAdapter from "./ExpressAdapter"

const httpServer = new ExpressAdapter()

const userRepository = new UserRepositoryJSON()

const createUser = new CreateUser(userRepository)

new CreateUserController(httpServer, createUser)
httpServer.listen(3333)