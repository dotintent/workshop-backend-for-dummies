module.exports = (request, response) => {
  const responseHeaders = {
    'Content-Type': 'text/plain',
  };

  response.writeHead(404, responseHeaders);
  response.end('404 Not Found');
};
