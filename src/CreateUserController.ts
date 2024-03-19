import CreateUser from "./CreateUser";
import HttpServer from "./HttpServer";

export default class CriarContaController {
  constructor (
    readonly httpServer: HttpServer,
    readonly createUser: CreateUser,
  ) {
    httpServer.register("post", "/conta", async function(parms: any, body: any) {     
      const output = await createUser.execute(body)
      return { httpStatus: 201, output};
    })
  }
}