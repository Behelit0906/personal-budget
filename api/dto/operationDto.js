const createOperationDtoSchema = {
    type:'object',
    properties:{
        name:{
            type:'string',
            minLength:3,
            maxLength:45,
            errorMessage:{
                type:'The name property must be in string format',
                minLength:'The name must be at least 2 characters long',
                maxLength:'The name must have a maximum of 45 characters'
            }
        },
        type:{
            enum:['income','Income','egress','Egress'],
            errorMessage:{
                enum:'The type property can only have the values income or egress'
            }
        },
        amount:{
            type:'number',
            format:'double',
            errorMessage:{
                type:'The amount property must be a number',
                format:'The amount property must be a double '
            }
        },
        date:{
            type:'string',
            format:'date',
            errorMessage:{
                type:'The date property must be in string format',
                format:'Invalid date (YY-MM-DD)'
            }
        },
        userId:{

        }
    },
    required: ['name', 'type','amount','date'],
    additionalProperties:false,
    errorMessage: {
        additionalProperties: 'Only name, type, amount and date properties are accepted',
        required:{
            name:'The name field is required',
            type:'The type field is required',
            amount:'The amount field is required',
            date:'The date field is required'
        }
    }
}

const updateOperationDtoSchema = {
    type:'object',
    properties:{
        name:{
            type:'string',
            minLength:3,
            maxLength:45,
            errorMessage:{
                type:'The name property must be in string format',
                minLength:'The name must be at least 2 characters long',
                maxLength:'The name must have a maximum of 45 characters'
            }
        },
        amount:{
            type:'number',
            format:'double',
            errorMessage:{
                type:'The amount property must be a number',
                format:'The amount property must be a double '
            }
        },
        date:{
            type:'string',
            format:'date',
            errorMessage:{
                type:'The date property must be in string format',
                format:'Invalid date (YY-MM-DD)'
            }
        },
        userId:{

        }
    },
    required: ['name','amount','date'],
    additionalProperties:false,
    errorMessage: {
        additionalProperties: 'Only name, amount and date properties are accepted',
        required:{
            name:'The name field is required',
            amount:'The amount field is required',
            date:'The date field is required'
        }
    }
}

export default {createOperationDtoSchema, updateOperationDtoSchema};