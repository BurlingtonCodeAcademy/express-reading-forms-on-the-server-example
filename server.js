const express = require('express');
const app = express();

const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});
