import operationService from '../services/operationService.js';

const createNewOperation = async (req, res) => {
  try {
    await operationService.createNewOperation(req.body);
    res.status(200).send();
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
    console.log(error);
  }
};

const deleteOperation = async (req, res) => {
  const operationId = req.params.operationId;
  const { userId } = req.body;
  try {
    await operationService.deleteOperation(userId, operationId);
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

const updateOperation = async (req, res) => {
  let operationId = req.params.operationId;
  if (isNaN(operationId)) return res.status(400).send({ message: 'Invalid operation id' });
  operationId = parseInt(operationId);
  const { userId } = req.body;
  delete req.body.userId;
  const operationData = req.body;
  operationData.id = operationId;

  try {
    await operationService.updateOperation(userId, operationData);
    res.status(200).send();
  } catch (error) {
    let errorCode = 0;
    let message = '';
    if (error.name === 'No exists') {
      errorCode = 404;
      message = error.message;
    } else {
      errorCode = 500;
      console.log(error);
      message = 'Oops, something seems to be wrong, please try again later';
    }
    res.status(errorCode).send({ message });
  }
};

const getOneOperation = async (req, res) => {
  let operationId = req.params.operationId;
  if (isNaN(operationId)) return res.status(400).send({ message: 'Invalid operation id' });
  operationId = parseInt(operationId);

  const { userId } = req.body;
  try {
    const result = await operationService.getOneOperation(userId, operationId);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
  }
};

const getAllOperations = async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await operationService.getAllOperations(userId);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
  }
};

const getANumberOfOperations = async (req, res) => {
  if (!req.query.page || !req.query.limit)
    return res
      .status(400)
      .send({ message: 'Missing page number or limit in the url of the request' });

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  if (!page || !limit)
    return res
      .status(400)
      .send({ message: 'Page and limit values must be integers greater than 0' });

  const { userId } = req.body;

  try {
    const result = await operationService.getANumberOfOperations(userId, page, limit);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
  }
};

export default {
  createNewOperation,
  deleteOperation,
  updateOperation,
  getOneOperation,
  getAllOperations,
  getANumberOfOperations,
};
