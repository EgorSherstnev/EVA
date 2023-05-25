const Router = require('express');
const router = new Router();
const sendfileController = require('../controllers/sendfileController');
const authMiddleware = require('../middleware/authMiddleware');
const path = require('path');

router.get('/revit23', /*authMiddleware,*/ sendfileController.getR23);
router.get('/testDownload', sendfileController.getTest);

module.exports = router;
