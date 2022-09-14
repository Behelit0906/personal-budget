/**
 * @openapi
 * /api/v1/operations/:
 *   get:
 *     tags:
 *       - Operations
 *     responses:
 *       200:
 *         description: A JSON array of operations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     example:
 *                              id: 5
 *                              name: Blue jeans
 *                              type: Egress
 *                              amount: 57
 *                              date: 2022-08-18T05:00:00.000Z
 *
 *
 */
