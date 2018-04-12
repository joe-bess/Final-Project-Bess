const pg = require('../pg'),
      cors = require('koa2-cors'),
      koa = require('koa');

const app = new koa();

app.use(cors({ origin: '*' }));

  console.log(major, minor);

  ctx.body = key;
});

app.listen(5433);


app.get('/', (req, res) => con.sendRomanNames(res))