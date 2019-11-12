/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Select all checkboxes

$(".selectall.govuk-checkboxes__input").click(function(){
$(".individual.govuk-checkboxes__input").prop("checked",$(this).prop("checked"));
});

// Filter and sort //
//
// {% from "govuk/components/select/macro.njk" import govukSelect %}
//
// {{ govukSelect({
//   id: "sort",
//   name: "sort",
//   label: {
//     text: "Sort by"
//   },
//   items: [
//     {
//       value: "all",
//       text: "Show all",
//       selected: true
//     },
//     {
//       value: "none",
//       text: "None",
//     },
//     {
//       value: "a",
//       text: "Hold A"
//     },
//     {
//       value: "b",
//       text: "Hold B"
//     }
//     {
//       value: "c",
//       text: "Hold C"
//     }
//     {
//       value: "d",
//       text: "Hold D"
//     }
//     {
//       value: "e",
//       text: "Hold E"
//     }
//     {
//       value: "f",
//       text: "Hold F"
//     }
//     {
//       value: "g",
//       text: "Hold G"
//     }
//   ]
// }) }}
