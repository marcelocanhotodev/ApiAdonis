'use-strict';
const User = use("App/Models/User")

class UserService{

    static async create(data, response){
      const userexists = await User.findBy('email', data['email'])
      
      if(userexists)
        return response.status(422).send({ content: null, message: "Email já cadastrado!."})

      const user = await User.create(data)
      return response.status(201).send({ content: JSON.stringify(user), message: "Usário cadastrado com successo."})
    }
}
module.exports = UserService;

