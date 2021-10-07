var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/greeting', function (req, res, next) {
	res.render('greeting', { title: 'Express' });
});
router.get('/contact', function (req, res, next) {
	res.render('contact', { title: 'Express' });
});
router.get('/faq', function (req, res, next) {
	res.render('faq', { title: 'Express' });
});
router.get('/login', function (req, res, next) {
	res.render('login', { title: 'Express' });
});
router.get('/register', function (req, res, next) {
	res.render('register', { title: 'Express' });
});
router.get('/shop', function (req, res, next) {
	res.render('shop', { title: 'Express' });
});
router.get('/shopping-cart', function (req, res, next) {
	res.render('shopping-cart', { title: 'Express' });
});
router.get('/checkout', function (req, res, next) {
	res.render('check-out', { title: 'Express' });
});
router.get('/fillbox', function (req, res, next) {
	res.render('fillbox', { title: 'Express' });
});

router.post('/contactus', async (req, res, next) => {
	console.log('route called');
	let fname = req.body.fname;
	let lname = req.body.lname;
	let email = req.body.email;
	let message = req.body.message;

	// let response = await sendEmail({
	// 	email: 'sateeshreddy.y@byovet.com',
	// 	subject: `${(fname, lname)} with email : ${email} has contacted Byovet`,
	// 	text: message,
	// });
	if (response.status === 200) {
		res.status(200).send({ msg: 'OK' });
	} else {
		console.log('could not send email');
		// res.status(200).send({ msg: 'OK' });
	}
});

module.exports = router;
