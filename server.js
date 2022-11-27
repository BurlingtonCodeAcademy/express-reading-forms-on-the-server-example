const express = require('express');
const app = express();

const morgan = require('morgan');
const page = require('./templates/page.js');
const PORT = process.env.PORT || 3000;
const firstRouter = require('./routers/firstRouter.js');
const secondRouter = require('./routers/secondRouter.js');
const thirdRouter = require('./routers/thirdRouter.js');

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use('/first-word', firstRouter);
app.use('/second-word', secondRouter);
app.use('/third-word', thirdRouter);

app.get('/story', (req, res) => {
  const story = `<main>
      <p>It was a dark and stormy night, the family was busy eating the ${req.query['first-word']}, and getting into an argument while discussing ${req.query['second-word']}. But then, everyone settled down to watch a good game of ${req.query['third-word']}.</p>
    </main>`;
  const html = page({ title: 'The Story', body: story });
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});
