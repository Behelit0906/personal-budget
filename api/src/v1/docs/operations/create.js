/**
 * @openapi
 * /api/v1/operations/:
 *  post:
 *      summary: Create a operation
 *      tags: [Operation]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Operation'
 *
 *      responses:
 *          200:
 *              description: New operation created
 *          500:
 *              description: Server's problems
 *
 */
