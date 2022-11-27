const page = require('../templates/page.js');
const form = require('../templates/form.js');
const queryToString = require('../utils/queryToString.js');
const express = require('express');
const secondRouter = express.Router();

secondRouter.get('/', (req, res) => {
  const body = form({
    action: `second-word?${queryToString(req.query)}`,
    name: 'second-word',
    labelText: 'Favorite Thanksgiving discussion topic?',
  });
  const html = page({ title: 'Second Word', body: body });
  res.send(html);
});

secondRouter.post('/', (req, res) => {
  const submission = req.body['second-word'];
  const params = queryToString(req.query);
  const paramString = params.length ? params + '&' : '';
  // handle the request
  // body: { 'first-word': 'Turkey' }
  res.redirect(`/third-word?${paramString}second-word=${submission}`);
});

module.exports = secondRouter;
