'use strict'

const fs = require('fs');

const archivoBuffer = fs.readFileSync(process.argv[2]);

const archivo = archivoBuffer.toString().split('\n');

console.log(archivo.length - 1);
