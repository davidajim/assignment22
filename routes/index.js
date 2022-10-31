var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const video = document.createElement('video');

video.src = 've.mp4'
video.controls = true;
video.muted = false;
video.height = 240;
video.width = 320;
const box = document.getElementById('box');
box.appendChild(video)
