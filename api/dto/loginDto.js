const loginDtoSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      errorMessage: {
        format: 'Email address invalid',
      },
    },
    password: {
      type: 'string',
      pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$',
      errorMessage: {
        pattern:
          'Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.',
      },
    },
  },
  required: ['email', 'password'],
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'Only email and password properties are accepted',
    required: {
      email: 'The email field is required',
      password: 'The password field is required',
    },
  },
};

export default loginDtoSchema;
