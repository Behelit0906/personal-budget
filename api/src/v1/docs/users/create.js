/**
 * @openapi
 * /api/v1/users/register:
 *  post:
 *      summary: Create a user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *
 *      responses:
 *          200:
 *              description: New user created
 *          409:
 *              description: Email already registered
 *          500:
 *              description: Server's problems
 *
 */
