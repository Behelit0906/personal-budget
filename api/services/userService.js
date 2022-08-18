import userDao from "../database/userDao.js";
import bcrypt from 'bcrypt';
import { formatter } from "../helpers/nameFormat.js";

const createNewUser = async (newUser) => {

    const match = await userDao.findUserByEmail(newUser.email);
    console.log(match);
    if(match.length > 0){
        const error = new Error('Email already registered');
        error.name = 'exists';
        throw error;
    }

    newUser.name = formatter(newUser.name);
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    try{
        const result = userDao.createNewUser(newUser);
        return result;
    }
    catch(error){
        throw error;
    }
    
};

export default {createNewUser};