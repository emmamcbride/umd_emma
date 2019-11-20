const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Biographic match V8 S2//

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

// Document match V8 S2//

router.post('/document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentMatch = req.session.data['document-match']


// Check whether the variable matches a condition
  if (documentMatch == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }
  if (documentMatch == "no"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }
  if (documentMatch == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version8/stage2/document-check-edit')
  }


})

// Photo match V8 S2//

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
  // if (biographicMatch == 'theres-a-small-difference'){
  //   // Send user to next page
  //   res.redirect('/version8/stage2/document-check-edit')
  // }


})


// Request decision V8 S2//

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

// Request decision V8 S2//

router.post('/biographic-edit-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var biographicsEdit = req.session.data['biographics-edit']


// Check whether the variable matches a condition
  if (biographicsEdit == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/document-check')
  }


})

// Request decision V8 S2//

router.post('/document-edit-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentEdit = req.session.data['document-edit']


// Check whether the variable matches a condition
  if (documentEdit == "yes"){
    // Send user to next page
    res.redirect('/version8/stage2/check-photo')
  }


})

// Photo check V8 S2//

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

// Biographic match advanced V8 S5//

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

// Document match advanced V8 S5//

router.post('/document-match-adv-answer', function (req, res) {

  var documentMatchAdv = req.session.data['document-match-adv']


// Check whether the variable matches a condition
  if (documentMatchAdv == "yes"){
    // Send user to next page
    res.redirect('/version8/stage5/check-photo')
  }
  if (documentMatchAdv == "no"){
    // Send user to next page
    res.redirect('/version8/stage5/check-photo')
  }
  if (documentMatchAdv == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version8/stage5/check-photo')
  }


})


// Request decision V8 S5//

router.post('/photo-check-adv-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheckAdv = req.session.data['photo-check-adv']


// Check whether the variable matches a condition
  if (photoCheckAdv == "yes"){
    // Send user to next page
    res.redirect('/version8/stage5/review-and-submit')
  }
  if (photoCheckAdv == "no"){
    // Send user to next page
    res.redirect('/version8/stage5/review-and-submit')
  }

})

// Request Decision V8 S5 //


router.post('/request-decision-adv-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionAdv = req.session.data['request-decision-adv']


// Check whether the variable matches a condition
  if (requestDecisionAdv == "yes"){
    // Send user to next page
    res.redirect('/version8/stage5/application-updated')
  }
  if (requestDecisionAdv == "no"){
    // Send user to next page
    res.redirect('/version8/stage5/notify-rejection')
  }
  if (requestDecisionAdv == "refer"){
    // Send user to next page
    res.redirect('/version8/stage5/application-referred')
  }


})

// Request Decision V8 Superuser //


router.post('/request-decision-su-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionSu = req.session.data['request-decision-su']


// Check whether the variable matches a condition
  if (requestDecisionSu == "yes"){
    // Send user to next page
    res.redirect('/version8/superuser/task-list-updated')
  }
  if (requestDecisionSu == "no"){
    // Send user to next page
    res.redirect('/version8/superuser/task-list-updated')
  }
  if (requestDecisionSu == "hold"){
    // Send user to next page
    res.redirect('/version8/superuser/notify-rejection')
  }
  if (requestDecisionSu == "void"){
    // Send user to next page
    res.redirect('/version8/superuser/task-list-updated')
  }


})


// Filter pages EXPERIMENTAL//

router.post('/sort-hold-type', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var holdType = req.session.data['sort-hold-type']


// Check whether the variable matches a condition
  if (holdType == "all"){
    // Send user to next page
    res.redirect('/version9/experimental/filter-option')
  }
  if (holdType == "none"){
    // Send user to next page
    res.redirect('/version9/experimental/filter-option-none')
  }
  if (holdType == "a"){
    // Send user to next page
    res.redirect('/version9/experimental/filter-option-a')
  }
  if (holdType == "b"){
    // Send user to next page
    res.redirect('/version9/experimental/filter-option-b')
  }
  if (holdType == "c"){
    // Send user to next page
    res.redirect('/version9/experimental/filter-option-c')
  }
})

// --------------------------------------------------------------------------- //

// Biographic match V9 S2//

router.post('/92-biographic-match-answer', function (req, res) {

  var biographicMatchB = req.session.data['92-biographic-match']


// Check whether the variable matches a condition
  if (biographicMatchB == "yes"){
    // Send user to next page
    res.redirect('/version9/stage2/document-check')
  }
  if (biographicMatchB == "no"){
    // Send user to next page
    res.redirect('/version9/stage2/document-check')
  }
  if (biographicMatchB == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/stage2/biographics-check-edit')
  }


})

// Document match V9 S2//

router.post('/92-document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentMatchB = req.session.data['92-document-match']


// Check whether the variable matches a condition
  if (documentMatchB == "yes"){
    // Send user to next page
    res.redirect('/version9/stage2/check-photo')
  }
  if (documentMatchB == "no"){
    // Send user to next page
    res.redirect('/version9/stage2/check-photo')
  }
  if (documentMatchB == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/stage2/document-check-edit')
  }


})

// Photo match V9 S2//

router.post('/92-photo-check-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheckB = req.session.data['92-photo-check']


// Check whether the variable matches a condition
  if (photoCheckB == "yes"){
    // Send user to next page
    res.redirect('/version9/stage2/review-and-submit')
  }
  if (photoCheckB == "no"){
    // Send user to next page
    res.redirect('/version9/stage2/review-and-submit')
  }


})

// Request decision V9 S2//

router.post('/92-request-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionB = req.session.data['92-request-decision']


// Check whether the variable matches a condition
  if (requestDecisionB == "yes"){
    // Send user to next page
    res.redirect('/version9/stage2/submission-updated')
  }
  if (requestDecisionB == "no"){
    // Send user to next page
    res.redirect('/version9/stage2/notify-rejection')
  }
  if (requestDecisionB == "refer"){
    // Send user to next page
    res.redirect('/version9/stage2/submission-referred')
  }


})

// Biographic match V9 S5//

router.post('/95-biographic-match-answer', function (req, res) {

  var biographicMatchC = req.session.data['95-biographic-match']


// Check whether the variable matches a condition
  if (biographicMatchC == "yes"){
    // Send user to next page
    res.redirect('/version9/stage5/document-check')
  }
  if (biographicMatchC == "no"){
    // Send user to next page
    res.redirect('/version9/stage5/document-check')
  }
  if (biographicMatchC == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/stage5/document-check')
  }


})

// Document match V9 S5//

router.post('/95-document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentMatchC = req.session.data['95-document-match']


// Check whether the variable matches a condition
  if (documentMatchC == "yes"){
    // Send user to next page
    res.redirect('/version9/stage5/check-photo')
  }
  if (documentMatchC == "no"){
    // Send user to next page
    res.redirect('/version9/stage5/check-photo')
  }
  if (documentMatchC == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/stage5/check-photo')
  }


})

// Photo match V9 S5//

router.post('/95-photo-check-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheckC = req.session.data['95-photo-check']


// Check whether the variable matches a condition
  if (photoCheckC == "yes"){
    // Send user to next page
    res.redirect('/version9/stage5/review-and-submit')
  }
  if (photoCheckC == "no"){
    // Send user to next page
    res.redirect('/version9/stage5/review-and-submit')
  }


})

// Request decision V9 S5//

router.post('/95-request-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionC = req.session.data['95-request-decision']


// Check whether the variable matches a condition
  if (requestDecisionC == "yes"){
    // Send user to next page
    res.redirect('/version9/stage5/application-updated')
  }
  if (requestDecisionC == "no"){
    // Send user to next page
    res.redirect('/version9/stage5/notify-rejection')
  }
  if (requestDecisionC == "refer"){
    // Send user to next page
    res.redirect('/version9/stage5/application-referred')
  }


})

// Request decision V9 SU//

router.post('/request-decision-9s-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionD = req.session.data['request-decision-9s']


// Check whether the variable matches a condition
  if (requestDecisionD == "yes"){
    // Send user to next page
    res.redirect('/version9/superuser/task-list-updated')
  }
  if (requestDecisionD == "no"){
    // Send user to next page
    res.redirect('/version9/superuser/notify-rejection')
  }
  if (requestDecisionD == "hold"){
    // Send user to next page
    res.redirect('/version9/superuser/task-list-updated')
  }
  if (requestDecisionD == "withdraw"){
    // Send user to next page
    res.redirect('/version9/superuser/task-list-updated')
  }


})

//--------------------------------------------------------


// Biographic match V9 CC//

router.post('/9cc-biographic-match-answer', function (req, res) {

  var biographicMatchD = req.session.data['9cc-biographic-match']


// Check whether the variable matches a condition
  if (biographicMatchD == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck/document-check')
  }
  if (biographicMatchD == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck/document-check')
  }
  if (biographicMatchD == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/chipcheck/biographics-check-edit')
  }


})

// Document match V9 CC//

router.post('/9cc-document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentMatchD = req.session.data['9cc-document-match']


// Check whether the variable matches a condition
  if (documentMatchD == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck/facial-likeness')
  }
  if (documentMatchD == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck/facial-likeness')
  }


})

// Photo match V9 CC//

router.post('/9cc-photo-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheckD = req.session.data['9cc-photo-match']


// Check whether the variable matches a condition
  if (photoCheckD == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck/review-and-submit')
  }
  if (photoCheckD == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck/review-and-submit')
  }


})

// Request decision V9 CC//

router.post('/9cc-request-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionD = req.session.data['9cc-request-decision']


// Check whether the variable matches a condition
  if (requestDecisionD == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-updated')
  }
  if (requestDecisionD == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck/notify-rejection')
  }
  if (requestDecisionD == "contact"){
    // Send user to next page
    res.redirect('/version9/chipcheck/contact-customer')
  }
  if (requestDecisionD == "refer"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-referred')
  }


})

// Request decision V9 CC//

router.post('/hold-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var holdDecision = req.session.data['hold-decision']


// Check whether the variable matches a condition
  if (holdDecision == "open"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-updated')
  }
  if (holdDecision == "later-time"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-updated')
  }
  if (holdDecision == "spec-time"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-updated')
  }
  if (holdDecision == "spec-date"){
    // Send user to next page
    res.redirect('/version9/chipcheck/application-updated')
  }


})

//--------------------------------------------------------


// Biographic match V9.2 CC//

router.post('/9-2-biographic-match-answer', function (req, res) {

  var biographicMatchE = req.session.data['9-2-biographic-match']


// Check whether the variable matches a condition
  if (biographicMatchE == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/document-check')
  }
  if (biographicMatchE == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/document-check')
  }
  if (biographicMatchE == 'theres-a-small-difference'){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/biographics-check-edit')
  }


})

// Document match V9.2 CC//

router.post('/9-2-document-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var documentMatchE = req.session.data['9-2-document-match']


// Check whether the variable matches a condition
  if (documentMatchE == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/facial-likeness')
  }
  if (documentMatchE == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/facial-likeness')
  }


})

// Photo match V9.2 CC//

router.post('/9-2-photo-match-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var photoCheckE = req.session.data['9-2-photo-match']


// Check whether the variable matches a condition
  if (photoCheckE == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/review')
  }
  if (photoCheckE == "no-accept"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/review')
  }
  if (photoCheckE == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/review')
  }


})

// Request decision V9.2 CC//

router.post('/9-2-request-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var requestDecisionE = req.session.data['9-2-request-decision']


// Check whether the variable matches a condition
  if (requestDecisionE == "yes"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/contact-customer')
  }
  if (requestDecisionE == "no"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/submit')
  }
  // if (requestDecisionE == "contact"){
  //   // Send user to next page
  //   res.redirect('/version9/chipcheck-131119/contact-customer')
  // }
  // if (requestDecisionE == "refer"){
  //   // Send user to next page
  //   res.redirect('/version9/chipcheck-131119/application-referred')
  // }


})

// Request decision V9.2 CC//

router.post('/9-2-submit-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var submitDecisionE = req.session.data['9-2-submit-decision']


// Check whether the variable matches a condition
  if (submitDecisionE == "accept"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-updated')
  }
  if (submitDecisionE == "reject"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/notify-rejection')
  }
  if (submitDecisionE == "refer"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-referred')
  }


})

// Request decision V9.2 CC//

router.post('/9-2-hold-decision-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var holdDecisionE = req.session.data['9-2-hold-decision']


// Check whether the variable matches a condition
  if (holdDecisionE == "open"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-updated')
  }
  if (holdDecisionE == "later-time"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-updated')
  }
  if (holdDecisionE == "spec-time"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-updated')
  }
  if (holdDecisionE == "spec-date"){
    // Send user to next page
    res.redirect('/version9/chipcheck-131119/application-updated')
  }


})


//
// Do not delete below //

module.exports = router
