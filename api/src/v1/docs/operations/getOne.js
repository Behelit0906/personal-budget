/**
 * @openapi
 * /api/v1/operations/{operationId}}:
 *   get:
 *     summary: Get operation by id
 *     tags: [Operation]
 *     responses:
 *       200:
 *         description: A JSON array of operation
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
