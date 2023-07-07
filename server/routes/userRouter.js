const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const {body} = require('express-validator')

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min:3, max: 32}),
    userController.registration
);
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

router.get('/users',userController.getUsers)

module.exports = router;