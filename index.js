const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({"name": "Evrosale"}));

app.listen(5050, () => console.log('Server ready'));
