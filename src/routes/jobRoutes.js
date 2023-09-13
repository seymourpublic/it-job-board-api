// src/routes/jobRoutes.js

const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Create a new job listing
router.post('/', jobController.createJob);

// GET all job listings
router.get('/', jobController.getAllJobs);

// GET a job listing by ID
router.get('/:id', jobController.getJobById);

// Update a job listing by ID
router.put('/:id', jobController.updateJobById);

// Delete a job listing by ID
router.delete('/:id', jobController.deleteJobById);

module.exports = router;
