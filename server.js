const express = require("express");
const morgan = require("morgan");


const PORT =  process.env.PORT || 3001;
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({
      message: "API UP!"
    });
  });

server.listen(PORT, () => {
    mongoConfig()
    console.log('server is listening on port ' + PORT)
  })