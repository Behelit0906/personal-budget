/**
 * @openapi
 * /api/v1/operations/paginate?page={pageNumber}&limit={amount}:
 *  get:
 *      summary: Get a number of operations
 *      tags: [Operation]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          amount:
 *                              type: number
 *                          date:
 *                              type: date
 *                      example:
 *                          name: Blue Jeans
 *                          amount: 45.5
 *                          date: 2022-07-05
 *
 *      responses:
 *          200:
 *              description: Array with operations
 *          400:
 *              description: Operation's id invalid, must be a integer number
 *          404:
 *              description: Operation not exist
 *          500:
 *              description: Server's problems
 *
 */
