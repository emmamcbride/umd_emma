const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Biographic match //

router.post('/biographic-match-answer', function (req, res) {

  var biographicMatch = req.session.data['biographic-match']


// Check whether the variable matches a condition
  if (biographicMatch == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/document-check')
  }
  if (biographicMatch == "no"){
    // Send user to next page
    res.redirect('/version8/stage2/document-check')
  }
  if (biographicMatch == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('#')
  }


})

// Document match //

router.post('/document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var biographicMatch = req.session.data['document-match']


// Check whether the variable matches a condition
  if (biographicMatch == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }
  if (biographicMatch == "no"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }
  if (biographicMatch == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('#')
  }


})

// Request decision //

router.post('/request-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecision = req.session.data['request-decision']


// Check whether the variable matches a condition
  if (requestDecision == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/submission-updated')
  }
  if (requestDecision == "no"){
    // Send user to next page
    res.redirect('/version8/stage2/submission-rejected')
  }
  if (requestDecision == "refer"){
    // Send user to next page
    res.redirect('/version8/stage2/submission-referred')
  }


})

module.exports = router
