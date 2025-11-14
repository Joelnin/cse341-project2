const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => (
    //#swagger.tags = ['Hello World']
    res.send("Hello World")
));

router.use('/heroes', require('./heroes'));
router.use('/regions', require('./regions'));
router.use('/creatures', require('./creatures'));


module.exports = router;
