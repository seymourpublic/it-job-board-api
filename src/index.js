const passport = require('passport');
const OAuthStrategy = require('passport-oauth2').Strategy;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const cors = require('cors');
const serveSwaggerUI = require('./swagger/swaggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://naledi:naledi@cluster0.vvy3x7y.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

  passport.use(
    new OAuthStrategy(
      {
        authorizationURL: 'OAuth provider authorization URL',
        tokenURL: 'OAuth provider token URL',
        clientID: 'Your client ID',
        clientSecret: 'Your client secret',
        callbackURL: 'Your callback URL',
      },
      (accessToken, refreshToken, profile, done) => {
         return done(null, profile);
      }
    )
  );

  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'IT Job Board API',
        version: '1.0.0',
        description: 'This is an API for managing job listings. It allows users to view all job listings, retrieve details of a specific job by its unique ID, create new job listings, update existing job listings, and delete job listings. Each job listing includes details such as the job title, company, description, logo URL, closing date for applications, and email address for applications.',
      },
    },
    apis: ['./routes/jobRoutes'], 
  };

app.use(express.json());
app.use(cors());



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

serveSwaggerUI(app);

app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
