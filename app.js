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

var clickEvent = function() {
  var $button = $(this);
  $button.addClass('hidden');
  $('.boxes').fadeIn(700);
}

$(function(){
  $('.show-projects').on('click', clickEvent);
})
