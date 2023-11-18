const Job = require('../models/jobModel');

// Create a new job listing
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    console.error('Error creating job listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all job listings
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a job listing by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    console.error('Error fetching job by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a job listing by ID
exports.updateJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    console.error('Error updating job listing by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a job listing by ID
exports.deleteJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job listing deleted' });
  } catch (err) {
    console.error('Error deleting job listing by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
