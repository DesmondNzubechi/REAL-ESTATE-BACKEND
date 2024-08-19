const express = require('express');
const { signUpNewUser, loginUser, forgotPassword, resetPassword, changePassword, protectedRoute, verifyTheUserEmail, getMe, logoutUser} = require('../controllers/authController');
const { getAllUser, createAUser, updateMe, getAUser, deleteAUser, updateProfilePicture } = require('../controllers/userController');
const { uploadPhoto, uploadImageToCloudinary } = require('../controllers/uploadController');

const router = express.Router();

router
    .route('/signup')
    .post(signUpNewUser)

router 
    .route('/resetPassword/:token')
    .patch(resetPassword)

router
    .route('/forgotPassword')
    .post(forgotPassword)

router
    .route("/login")
    .post(loginUser)

router
    .route("/getAllUser")
    .get(getAllUser)
 
router 
    .route('/changePassword')
    .patch(protectedRoute, changePassword)
 
router
    .route("/createAUser")
    .post(createAUser)

router
    .route('/updateUser/:id')
    .patch(protectedRoute, updateMe)

    router
    .route('/updateProfilePic/:id')
    .patch(protectedRoute, uploadPhoto, uploadImageToCloudinary, updateProfilePicture)

    router
    .route('/deleteAUser')
    .patch(protectedRoute, deleteAUser)


router
    .route("/verifyTheUserEmail/:theToken")
    .patch(verifyTheUserEmail)

router 
    .route('/getAUser/:id')
    .get(protectedRoute, getAUser)

router
    .route('/me')
    .get(getMe)

    router
    .route('/logout')
    .post(logoutUser)


module.exports = router;