import userService from '../services/userService.js';

const createNewUser = async (req, res) => {
  const newUser = req.body;
  try {
    await userService.createNewUser(newUser);
    res.status(200).send();
  } catch (error) {
    let errorCode = 0;
    let message = '';
    if (error.name === 'exists') {
      errorCode = 409;
      message = error.message;
    } else {
      errorCode = 500;
      message = 'Oops, something seems to be wrong, please try again later';
    }
    res.status(errorCode).send({ message });
  }
};

const userAuthenticator = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await userService.userAuthenticator(email, password);
    if (!result) return res.status(401).send({ message: 'Incorrect email or password' });
    return res.send({ jwt: result });
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Oops, something seems to be wrong, please try again later' });
  }
};

export default { createNewUser, userAuthenticator };
