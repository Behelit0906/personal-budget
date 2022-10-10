/**
 * @openapi
 * /api/v1/users/login:
 *  post:
 *      summary: Login
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: email
 *                          password:
 *                              type: string
 *                      example:
 *                          email: luis@gmail.com
 *                          password: 7FKdjgf!58
 *
 *
 *      responses:
 *          200:
 *              description: Return a JWT
 *          500:
 *              description: Server's problems
 *
 */
