// CommonJS - Node.js
const express = require('express');

// ES6 Modules - browser, Node.js last version >10
// import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Evrosale'));

app.listen(5050, () => console.log('Server ready'));
