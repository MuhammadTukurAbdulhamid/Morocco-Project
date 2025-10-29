const { Router } = require('express');
const router = Router();
const RecordController = require('../controllers/RecordController');
const AuthController = require('../controllers/authController');

router.post('/register', RecordController.post);
router.get('/register', RecordController.get_all_record);
// router.put('/verify/:id', RecordController.edit_record);
router.delete('/regiter/:id', RecordController.deleteRecord);
router.get('/register/:email', RecordController.getRecordByEmail);
router.get('/scan/:id', RecordController.getRecordById);

router.put('/initialize/:id', RecordController.generateTransaction);
router.get('/verify/:id', RecordController.verifyTransaction);

router.get('/generate_code/:email', RecordController.generateTransactionToken);
router.get('/generate_code', RecordController.getAllTokens);
router.get(
  '/verify_token/:email/:token/:isRegister',
  RecordController.verifyGeneratedToken
);

router.post('/booking', RecordController.createBooking);
router.get('/booking/verify/:id', RecordController.verifyBooking);
router.get('/booking', RecordController.getAllBookings);

router.post('/login', AuthController.login);
router.get('/all_users', AuthController.getAllUsers);
router.post('/signup', AuthController.signup);

// router.delete("/record", RecordController.remove_all_users);
// router.post("/login", RecordController.Login_post);

module.exports = router;
