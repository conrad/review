const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({bye: 'buddy' });
})

const PORT = process.env.PORT || 5000 // Heroku injects this environmental variable.
app.listen(PORT);
