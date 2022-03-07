import * as express from 'express';
import * as validator from 'express-validator';
import * as userMiddleware from '../middleware/user.middleware';

const userController = express.Router({mergeParams: true});


/**
 * TODO: DEFINE ROUTES
 */


// ..........
userController.get(
    '/',
    userMiddleware.getAllUsers
);

userController.get(
    '/:email',
    validator.param('email').isEmail(),
    userMiddleware.getUserByEmail
);

userController.put(
    '/',
    validator.body('email').isEmail(),
    validator.body('firstName').isString().isLength({ min: 1 }),
    validator.body('lastName').isString().isLength({ min: 1 }),
    userMiddleware.insertUser
);

userController.delete(
    '/:email',
    validator.param('email').isEmail(),
    userMiddleware.deleteUserByEmail
);


/**
 * END TODO
 */


export {
    userController
};