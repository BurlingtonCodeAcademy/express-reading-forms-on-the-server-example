const page = require('../templates/page.js');
const form = require('../templates/form.js');
const queryToString = require('../utils/queryToString.js');
const express = require('express');
const firstRouter = express.Router();

firstRouter.get('/', (req, res) => {
  const body = form({
    action: `first-word?${queryToString(req.query)}`,
    name: 'first-word',
    labelText: 'Favorite Thanksgiving leftover?',
  });
  const html = page({ title: 'First Word', body: body });
  res.send(html);
});

firstRouter.post('/', (req, res) => {
  const params = queryToString(req.query);
  const paramString = params.length ? params + '&' : '';
  // handle the request
  // body: { 'first-word': 'Turkey' }
  const submission = req.body['first-word'];
  res.redirect(`/second-word?${paramString}first-word=${submission}`);
});

module.exports = firstRouter;
