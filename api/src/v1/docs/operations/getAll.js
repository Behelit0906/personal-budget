/**
 * @openapi
 * /api/v1/operations/:
 *   get:
 *     summary: Get all operations
 *     tags: [Operation]
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
 *                     $ref: '#/components/schemas/Operation'
 *
 *
 */
