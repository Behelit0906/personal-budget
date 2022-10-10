/**
 * @openapi
 * /api/v1/operations/{operationID}:
 *  delete:
 *      summary: Delete a operation
 *      tags: [Operation]
 *
 *      responses:
 *          200:
 *              description: Operation deleted
 *          400:
 *              description: Operation's id invalid, must be a integer number
 *          404:
 *              description: Operation not exist
 *          500:
 *              description: Server's problems
 *
 */
