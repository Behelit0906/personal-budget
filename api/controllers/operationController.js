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
  const operationId = Number(req.params.operationId);
  if(!Number.isInteger(operationId)) 
    res.send(400).send({ message: 'Operation id invalid, must be an integer' });

  const { userId } = req.body;

  try {
    await operationService.deleteOperation(userId, operationId);
    res.status(200).send();
  } catch (error) {
    if (error.name === 'No exists') res.status(404).send({ message: error.message });
    else{ 
      res.send(500).send({message: 'Oops, something seems to be wrong, please try again later' });
      console.log(error);
    }
};

const updateOperation = async (req, res) => {
  const operationId = Number(req.params.operationId);
  if(!Number.isInteger(operationId)) 
    res.send(400).send({ message: 'Operation id invalid, must be an integer' });
  
  const operationData = Object.assign(req.body);
  operationData.id = operationId;

  try {
    await operationService.updateOperation(operationData);
    res.status(200).send();
  } catch (error) {
    if (error.name === 'No exists') res.status(404).send({ message: error.message });
    else {
      res.send(500).send({message: 'Oops, something seems to be wrong, please try again later' });
      console.log(error);
    }
  }
};

const getOneOperation = async (req, res) => {
  const operationId = Number(req.params.operationId);
  if(!Number.isInteger(operationId)) 
    res.send(400).send({ message: 'Operation id invalid, must be an integer' });

  const { userId } = req.body;
  
  try {
    const result = await operationService.getOneOperation(userId, operationId);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
    console.log(error);
  }
};

const getAllOperations = async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await operationService.getAllOperations(userId);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
    console.log(error);
  }
};

const getANumberOfOperations = async (req, res) => {
  if (!req.query.page || !req.query.limit)
    return res
      .status(400)
      .send({ message: 'Missing page number or limit in the url of the request' });

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  if (!Number.isInteger(page) || !Number.isInteger(limit) || page <= 0 || limit <= 0)
    return res
      .status(400)
      .send({ message: 'Page and limit values must be integers greater than 0' });

  const { userId } = req.body;

  try {
    const result = await operationService.getANumberOfOperations(userId, page, limit);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: 'Oops, something seems to be wrong, please try again later' });
    console.log(error);
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
