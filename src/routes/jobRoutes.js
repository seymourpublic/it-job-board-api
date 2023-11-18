const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job listing
 *     description: Create a new job listing with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *               closingDate:
 *                 type: string
 *               emailAddress:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job listing created successfully
 *       500:
 *         description: Server error
 */
router.post('/', jobController.createJob);

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all job listings
 *     description: Retrieve a list of all available job listings.
 *     responses:
 *       200:
 *         description: List of job listings
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  company:
 *                      type: string
 *                  description:
 *                      type: string
 *                  logoUrl:
 *                      type: string
 *                  closingDate:
 *                      type: string
 *                  emailAddress:
 *                      type: string
 *       500:
 *         description: Server error
 */
router.get('/', jobController.getAllJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a job listing by ID
 *     description: Retrieve a job listing by its unique ID.
 *     parameters:
 *       - in: path
 *          name: id
 *              required: true
 *          description: Job listing ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job listing found
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  company:
 *                      type: string
 *                  description:
 *                      type: string
 *                  logoUrl:
 *                      type: string
 *                  closingDate:
 *                      type: string
 *                  emailAddress:
 *                      type: string
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */
router.get('/:id', jobController.getJobById);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job listing by ID
 *     description: Update a job listing with the provided details by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Job listing ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *               closingDate:
 *                 type: string
 *               emailAddress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job listing updated successfully
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                  company:
 *                      type: string
 *                  description:
 *                      type: string
 *                  logoUrl:
 *                      type: string
 *                  closingDate:
 *                      type: string
 *                  emailAddress:
 *                      type: string
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */
router.put('/:id', jobController.updateJobById);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job listing by ID
 *     description: Delete a job listing by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Job listing ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job listing deleted successfully
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', jobController.deleteJobById);

module.exports = router;
