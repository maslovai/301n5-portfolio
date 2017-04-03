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
  var name = 'Paula Mookerjee',
  char = 0;

  setInterval(function(){
    $('#fadeIn').append(name[char]);
    char++;
  },90);
});
