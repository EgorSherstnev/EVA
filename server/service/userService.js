const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const { User } = require('../models/models')
const tokenService = require('./tokenService')

class UserService {
   async registration (userName, company, email, password, role) {
      const candidate = await User.findOne({where: {email}})
      if(candidate) {
         return next(ApiError.badRequest(`Пользователь с таким почтовым адресом ${email} уже существует`))
      }
      const hashPassword = await bcrypt.hash(password, 5)
      const activationLink = uuid.v4()
      const user = await User.create({userName, company, email, role, password:hashPassword, activationLink})
      await mailService.sendActivationMail(email, activationLink);
      const tokens = tokenService.generateTokens()
   }
}

module.exports = new UserService();