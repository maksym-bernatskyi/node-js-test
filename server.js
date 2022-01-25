const Joi = require('joi');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('qwe'));

const shortid = require('shortid');

// console.log(shortid.generate());

const express = require('express');
const app = express();

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущен на порте ${listener.address().port}`)
});