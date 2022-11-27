const queryToString = (query) => {
  if (Object.keys(query).length === 0) return '';
  return Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&');
};

module.exports = queryToString;
