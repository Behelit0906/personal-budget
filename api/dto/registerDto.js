const registerDtoSchema = {
    type:'object',
    properties:{
        name:{
            type:'string',
            minLength: 2,
            maxLength: 45,
            errorMessage:{
                minLength:'The name must be at least 2 characters long',
                maxLength:'The name must have a maximum of 45 characters'
            }
        },
        email:{
            type:'string',
            format:'email',
            errorMessage:{
                format:'Email address invalid'
            }
        },
        password:{
            type:'string',
            pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$",
            errorMessage:{
                pattern:'Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.',
            }
        }
    },
    required: ['name', 'email', 'password'],
    additionalProperties:false,
    errorMessage: {
        additionalProperties: 'Only name, email and password properties are accepted',
        required:{
            name:'The name field is required',
            email:'The email field is required',
            password:'The password field is required'
        }
    }
}

export default registerDtoSchema; 