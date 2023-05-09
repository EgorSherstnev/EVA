const Router = require('express');
const router = new Router();
const sendfileController = require('../controllers/sendfileController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/revit23', sendfileController.getR23)

module.exports = router;