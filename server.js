import express from 'express';
import router from './api';

const server = express();
const port = 3000;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '...',
  });
});

server.get('/api', router);
server.use(express.static('public'));

server.listen(port, () => {
  console.info(`Express listening on port: ${port}`);
});
