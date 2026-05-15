module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Leo OS Dashboard</h1><p>Sistema operativo activo.</p>');
};
