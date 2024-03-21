const logger = (req, res, next) => {
  const start = Date.now();
  const originalSend = res.send;
  res.send = function (data) {
    const elapsed = Date.now() - start;
    console.log(`${res.statusCode} - ${req.method} ${req.originalUrl} - ${elapsed}ms - ${data}`);
    originalSend.call(this, data);
  };
  next();
};

export default logger;
