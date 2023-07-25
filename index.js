const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;

const products = [];
products.push({ id: 'aaa-123', name: 'Testprodukt', price: 10.99 });
products.push({ id: crypto.randomUUID(), name: 'Macbook Pro', price: 1099.00 });
products.push({ id: crypto.randomUUID(), name: 'Macbook Air', price: 899.00 });

app.use(express.urlencoded({ extended: true })); // for req.body

app.get('/', (req, res) => {
  res.sendFile('preview.html', { root: __dirname });
})

//TODO: hier die express Endpoints einfügen

app.listen(port, () => {
  console.log(`Webserver gestartet: http://localhost:${port}`);
  console.log(`Zum Beenden: Ctrl+C`);
})
