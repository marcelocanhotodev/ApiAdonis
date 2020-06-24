'use strict'

class SessionController {
    async create ({ request, auth, response }) { 
        const { email, senha } = request.all()
        try {
          const token = await auth.attempt(email, senha)
          return response.status(201).send({ content: JSON.stringify(token), message: "Login efetuado com successo."})
        } catch (error) {
          return response.status(401).send({ content: null, message: 'Login invalido.' })
        }
    }
}

module.exports = SessionController
