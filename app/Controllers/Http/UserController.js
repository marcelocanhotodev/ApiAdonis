'use strict'
const UserService = use("App/Services/UserService")
class UserController {

  async create({request, response}){
    const data =  request.only(["username","email","password"])
    return UserService.create(data, response)
  }
  
}
module.exports = UserController
