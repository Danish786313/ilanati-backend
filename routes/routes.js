const router = require('express').Router();

router.use('/admin', require('./admin/adminRoutes'));
router.use('/app', require('./app/appRoutes'));
router.use('/common', require('./common/commonRoutes'));
router.use('/partner', require('./partner/partnerRoutes'));

module.exports = router;