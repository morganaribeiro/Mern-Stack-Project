const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const router = express.Router();

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);

// router.post('/admin/profile', requireSignin, (req, res) =>{
//     res.status(200).json({ user: 'profile' }) // test
// })

module.exports = router;