const page = require('../templates/page.js');
const form = require('../templates/form.js');
const queryToString = require('../utils/queryToString.js');
const express = require('express');
const thirdRouter = express.Router();

thirdRouter.get('/', (req, res) => {
  const body = form({
    action: `third-word?${queryToString(req.query)}`,
    name: 'third-word',
    labelText: 'Favorite post meal sport ball competition?',
  });
  const html = page({ title: 'third Word', body: body });
  res.send(html);
});

thirdRouter.post('/', (req, res) => {
  const submission = req.body['third-word'];
  const params = queryToString(req.query);
  const paramString = params.length ? params + '&' : '';
  // handle the request
  // body: { 'third-word': 'Turkey' }
  res.redirect(`/story?${paramString}third-word=${submission}`);
});

module.exports = thirdRouter;
