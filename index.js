const server = require('./server.js');

const PORT = 7000
server.listen(PORT, ()=> console.log(`Port ${PORT} is watching you...`))