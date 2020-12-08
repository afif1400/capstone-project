const express = require('express');
const router = express.Router();
const formModel = require('../models/form');

router.post('/', function (req, res) {
  const payload = req.body;

  // Validate all fields
  const userName =
    typeof payload.userName == 'string' && payload.userName.length != 0
      ? payload.userName.trim()
      : false;
  const teamName =
    typeof payload.teamName == 'string' ? payload.teamName.trim() : false;
  const contact =
    typeof payload.contact == 'string' && payload.contact.length == 10
      ? Number(payload.contact)
      : false;
  const email = typeof payload.email == 'string' ? payload.email.trim() : false;
  const membersRequired =
    typeof payload.membersRequired == 'string' ? payload.membersRequired : 0;
  const domain = typeof payload.domain == 'string' ? payload.domain : null;

  if (userName && teamName && contact && email && membersRequired) {
    const form = new formModel({
      userName: userName,
      teamName: teamName,
      contact: contact,
      email: email,
      domain: domain,
      membersRequired: membersRequired,
    });

    form.save(function (err) {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end();
      }
    });

    res.set('Content-Type', 'text/html');
    res.send(
      new Buffer(
        '<h2>Submitted Successfully</h2><br><a href="http://capstone-env.eba-jaytiqbh.ap-south-1.elasticbeanstalk.com">Go home</a>'
      )
    );
  } else {
    res.writeHead(400);
    res.end({ msg: 'Missing or invalid values' });
  }
});

module.exports = router;
