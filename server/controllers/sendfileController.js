const ApiError = require('../error/ApiError')
const path = require('path')

class SendFileController{
   async getR23(req, res, next) {
      try {
         const filename = 'EVARevit23.zip';
         const filepath = path.join(__dirname, '..', 'static', filename);
         return res.sendFile(filepath);
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
   }
}

module.exports = new SendFileController()