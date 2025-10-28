const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Admin route is working!');
});

module.exports = router;