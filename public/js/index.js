// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
//!!!not starter code!!!
var $turntable1 = $("#logo");
var audio = new Audio("../music/bassdrop.wav");
var $window = $(window);
var $cookienotice = $("#cookienotice");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// handleSiteBtnEnter is called when a user enters the turntable image to access the site
//!!!!! This is not starter code !!!!!!
var handleSiteBtnEnter = function() {
  $("#logo").css("border-style", "inset");
  $("#logo").css("border-color", "yellow");
  $("#logo").css("cursor", "pointer");
  audio.loop = true;
  audio.play();
};
// handleSiteBtnExit is called when a user exits the turntable image without clicking the image
//!!!!! This is not starter code !!!!!!
var handleSiteBtnExit = function() {
  $("#logo").css("border-style", "outset");
  $("#logo").css("border-color", "#218796");
  audio.pause();
};

// handleSiteBtnExit is called when a user exits the turntable image without clicking the image
//!!!!! This is not starter code !!!!!!
var handleSiteBtnClick = function() {
  console.log("exit function completed");
};

var handlecookieloader = function() {

$('#cookienotice').modal('show')
console.log("handle cookie ran")
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
// Add event listener to depress image when clicked
$turntable1.on("mouseover", handleSiteBtnEnter);
$turntable1.on("mouseout", handleSiteBtnExit);
$turntable1.on("click", handleSiteBtnClick);

$window.on('load', handlecookieloader);

