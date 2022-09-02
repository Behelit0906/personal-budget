import registerDtoSchema from "../dto/registerDto.js";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormat  from "ajv-formats";


const ajv = new Ajv({allErrors:true});
addFormat(ajv, ['email','regex']);
addErrors(ajv, {keepErrors:false});

const validator = ajv.compile(registerDtoSchema);

const RegisterValidator = (req, res, next) => {
    
    const isDtoValid = validator(req.body);
        
    if(!isDtoValid){
        let errors = validator.errors.map((e) => {
            return e.message;
        })
        return res.status(400).send({message:errors});          
    }

    next();
    
}

export default RegisterValidator;