const AppError = require('../utils/AppError')

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if( !name || !email || !password ) {
      throw new AppError('nome, email e senha são obrigatórios!')
    }

    return response.status(200).json({message: "user created"})
  }
}

module.exports = UsersController