import userService from "../services/userService.js";


const createNewUser = async (req, res) => {
    const newUser = req.body;
    try{
        await userService.createNewUser(newUser);
        res.status(200).send();
    }
    catch(error){
        let errorCode = 0;
        let message = '';
        if(error.name == 'exists'){
            errorCode = 409;
            message = error.message;
        }
        else{
            errorCode = 500;
            message = 'Oops, something seems to be wrong, please try again later';
        }
        res.status(errorCode).send({message: message});
    }
}

export default {createNewUser};

