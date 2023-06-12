module.exports = (request, response) => {
  const responseHeaders = {
    'Content-Type': 'text/plain',
  };

  response.writeHead(200, responseHeaders);
  response.end('Status: OK');
};
