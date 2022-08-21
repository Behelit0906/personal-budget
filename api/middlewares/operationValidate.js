import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormat  from "ajv-formats";
import operationDto from "../dto/operationDto.js";

const ajv = new Ajv({allErrors:true});
addFormat(ajv, ['date','double']);
addErrors(ajv, {keepErrors:false});

const createValidator = ajv.compile(operationDto.createOperationDtoSchema);
const updateValidator = ajv.compile(operationDto.updateOperationDtoSchema);

const createValidation = (req, res, next) => {
    const isDtoValid = createValidator(req.body);
        
    if(!isDtoValid){
        let errors = createValidator.errors.map((e) => {
            return e.message;
        })
        return res.status(400).send({message:errors});          
    }

    next();
    
}

const updateValidation = (req, res, next) => {
    const isDtoValid = updateValidator(req.body);
        
    if(!isDtoValid){
        let errors = updateValidator.errors.map((e) => {
            return e.message;
        })
        return res.status(400).send({message:errors});          
    }

    next();
    
}

export default {createValidation, updateValidation}; 

