const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      Counter = require('./counter');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Creates a new Counter
router.post('/',(req, res) => {
  Counter.create({
          name : req.body.name,
          value: req.body.value
      }, 
      (err, counter) => {
          if (err) return res.status(500).send("There was a problem adding the new counter");
          res.status(200).send(counter);
      });
});

// Gets a single Counter (we are not going to use this one)
router.get('/:id', (req, res) => {
  Counter.findById(req.params.id, (err, counter) => {
      if (err) return res.status(500).send("There was a problem finding the counter.");
      if (!counter) return res.status(404).send("No counter found.");
      res.status(200).send(counter);
  });
});

//Deletes a counter
router.delete('/:id', (req, res) => {
  Counter.findByIdAndRemove(req.params.id, (err,counter) => {
      if (err) return res.status(500).send("There was a problem deleting the counter.");
      res.status(200).send(counter);
  });
});

// Updates a single counter
router.put('/:id', (req, res) => {
  Counter.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, counter) => {
      if (err) return res.status(500).send("There was a problem updating the counter.");
      res.status(200).send(counter);
  });
});

// Select all Counters
router.get('/', (req, res) => {
  Counter.find({}, (err, counters) => {
      if (err) return res.status(500).send("There was a problem finding our counters :C");
      res.status(200).send(counters);
  });
});


module.exports = router;