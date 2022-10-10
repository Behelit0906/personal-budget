/**
 * @openapi
 *  components:
 *      schemas:
 *          Operation:
 *              type: object
 *              required:
 *                  - name
 *                  - type
 *                  - amount
 *                  - date
 *              properties:
 *                  name:
 *                      type: string
 *                  type:
 *                      type: string
 *                      description: The possible types are Egress and Income
 *                  amount:
 *                      type: number
 *                  date:
 *                      type: date
 *              example:
 *                  name: Coca cola
 *                  type: Egress
 *                  amount: 2.15
 *                  date: 2022-09-25
 */
