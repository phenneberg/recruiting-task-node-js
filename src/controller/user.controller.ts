import * as express from 'express';
import * as validator from 'express-validator';


const userController = express.Router({mergeParams: true});


/**
 * TODO: DEFINE ROUTES
 */


// TODO: GET ALL USERS              (GET http:${host}:${port}/user)
// ...


// TODO: GET USER BY EMAIL          (GET http:${host}:${port}/user/${email})
// ...


// TODO: INSERT USER                (POST http:${host}:${port}/user)
// ...


// TODO: DELETE USER BY EMAIL       (DELETE http:${host}:${port}/user/${email})
// ...


/**
 * END TODO
 */


export {
    userController
};