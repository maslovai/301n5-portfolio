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
  index1 = 0, index2 = 0, index3 = 0;

  var firstLine = Handlebars.compile($('#welcome').html());
  var secondLine = Handlebars.compile($('#about').html());
  var thirdLine = Handlebars.compile($('#invitation').html());

  var welcomeContent = { welcome: 'Welcome to my portfolio' }
  var aboutContent = { about: 'The projects below were created during my studies at Code Fellow'}
  var invitationContent = { invitation: 'Please feel free to look around, or drop me a note on the Contact page'}

  setInterval(function(){
    $('#fadeIn').append(name[index1]);
    index1++;
  },125);

  setTimeout(function(){
    $('#fadeIn').slideToggle('fast');
  },200);


  // setInterval(function(){
  //   var script = firstLine(welcomeContent);
  //   $('#stuff').append(script[index2]).fadeIn('fast');
  //   index2++;
  // }, 600);
  //
  // setTimeout(function(){
  //   $('#stuff').slideToggle('fast');
  // }, 800);
});

$(function() {


});
