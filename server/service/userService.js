const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const { User } = require('../models/models')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/user-dto')

class UserService {
   async registration (userName, company, email, password, role) {
      const candidate = await User.findOne({where: {email}})
      if(candidate) {
         return next(ApiError.badRequest(`Пользователь с таким почтовым адресом ${email} уже существует`))
      }
      const hashPassword = await bcrypt.hash(password, 5)
      const activationLink = uuid.v4()
      const user = await User.create({userName, company, email, password:hashPassword, role, activationLink})
      await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

      const userDto = new UserDto(user)
      const tokens = tokenService.generateTokens({...userDto})
      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }

   async activate(activationLink) {
      const user = await User.findOne({activationLink})
      if (!user) {
         return next(ApiError.badRequest('Некорректная ссылка активации'))
      }
      user.isActivated = true;
      await user.save();
   }
}

module.exports = new UserService();