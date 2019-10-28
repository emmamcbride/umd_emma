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
    res.redirect('/version8/stage2/biographics-check-edit')
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
    res.redirect('/version8/stage2/document-check-edit')
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
    res.redirect('/version8/stage2/notify-rejection')
  }
  if (requestDecision == "refer"){
    // Send user to next page
    res.redirect('/version8/stage2/submission-referred')
  }


})

// Request decision //

router.post('/biographic-edit-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var biographicsEdit = req.session.data['biographics-edit']


// Check whether the variable matches a condition
  if (biographicsEdit == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/document-check')
  }


})

// Request decision //

router.post('/document-edit-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentEdit = req.session.data['document-edit']


// Check whether the variable matches a condition
  if (documentEdit == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }


})

// Request decision //

router.post('/photo-check-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheck = req.session.data['photo-check']


// Check whether the variable matches a condition
  if (photoCheck == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/review-and-submit')
  }
  if (photoCheck == "no"){
    // Send user to next page
    res.redirect('/version8/stage2/review-and-submit')
  }

})

// Biographic match advanced //

router.post('/biographic-match-adv-answer', function (req, res) {

  var biographicMatchAdv = req.session.data['biographic-match-adv']


// Check whether the variable matches a condition
  if (biographicMatchAdv == "yes"){
    // Send user to next page
    res.redirect('/version8/stage5/document-check')
  }
  if (biographicMatchAdv == "no"){
    // Send user to next page
    res.redirect('/version8/stage5/document-check')
  }
  if (biographicMatchAdv == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version8/stage5/document-check')
  }


})

module.exports = router
