const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  fs.readFile('data/products.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to load products' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
