import express from 'express';
import { USER_DATA, removeUser } from '../data/amazing-data-store';
import { User } from '../types/user.types';


function getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        users: [...USER_DATA]
    });
}

function getUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    const email = req.params.email;
    const matchingUsers = USER_DATA.filter(user => user.email === email);

    if (matchingUsers.length < 1) {
        res.status(404).json({
            error: 'User does not exist'
        });
        return;  
    }

    res.status(200).json({
        user: {...matchingUsers[0]}
    });
}

function insertUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const user: User = {
        email,
        firstName,
        lastName
    };

    USER_DATA.push(user);

    res.sendStatus(201);
}

function deleteUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    const email = req.params.email;
    const matchingUsers = USER_DATA.filter(user => user.email === email);

    if (matchingUsers.length < 1) {
        res.status(404).json({
            error: 'User does not exist'
        });
        return;  
    }

    removeUser(email);

    res.sendStatus(200);
}


export {
    getAllUsers,
    getUserByEmail,
    insertUser,
    deleteUserByEmail
};