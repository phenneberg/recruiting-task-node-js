import express from 'express';
import { USER_DATA, removeUser } from '../data/amazing-data-store';
import { User } from '../types/user.types';


function getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
}

function getUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
}

function insertUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
}

function deleteUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
}


export {
    getAllUsers,
    getUserByEmail,
    insertUser,
    deleteUserByEmail
};