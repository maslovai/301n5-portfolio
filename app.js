'use strict';

var projects = [];



function Project(name, description, url, photo) {
  this.name = name;
  this.description = description;
  this.url = url;
  this.photo = photo;
}

(function() {

  $.ajax({
    url: 'project_file.json',
    async: false,
    dataType: 'json',
    success: function(data) {
      for(var x in data) {
        projects[x] = new Project(data[x].name, data[x].description, data[x].url, data[x].photo);
      }
    }
  });

}) ()

var showProjects = function() {
  var $button = $(this);
  $button.addClass('hidden');
  $('.boxes').fadeIn().addClass('show');
}

var slideMenu = function() {

}

$(function(){
  $('.show-projects').on('click', showProjects);
  $('#hamburger').on('click', slideMenu )
})

$(function () {
  var string = "Paula Mookerjee";
  var dest = $('#fadeIn');
  var c = 0;
  var i = setInterval(function () {
    if (c >= string.length) {
      clearInterval(i);
      dest.text(string);
    } else {
      $('h1').text(string[c]).
      appendTo(dest).fadeIn(200);
      c++;
    }
  }, 200);
});
