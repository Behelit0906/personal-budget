import userDao from "../database/userDao.js";
import bcrypt from 'bcrypt';
import { formatter } from "../helpers/nameFormat.js";

const createNewUser = async (newUser) => {

    const match = userDao.findUserByEmail(newUser.email);
    if(match.length > 0){
        return false;
    }

    newUser.name = formatter(newUser.name);
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    const result = userDao.createNewUser(newUser);
    return result;
    
};

export default {createNewUser};