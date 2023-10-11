const passport = require('passport');
const OAuthStrategy = require('passport-oauth2').Strategy;

const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;


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

app.use(express.json());

app.use(cors()); 


app.use('/jobs', jobRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
