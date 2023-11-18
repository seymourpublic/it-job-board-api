const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'IT Job Board API',
    version: '1.0.0',
    description: 'This is an API for managing job listings. It allows users to view all job listings, retrieve details of a specific job by its unique ID, create new job listings, update existing job listings, and delete job listings. Each job listing includes details such as the job title, company, description, logo URL, closing date for applications, and email address for applications.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/jobRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

function serveSwaggerUI(app) {
  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(swaggerSpec));
}

module.exports = serveSwaggerUI;
