

mapboxgl.accessToken = 'pk.eyJ1IjoiaGRld2V5IiwiYSI6ImNqMmR2ajZrMDA2NHUzM3M2bWhwaXBwc3MifQ.JriJ-xahYX1RjQhmp72N0A';

var map = new mapboxgl.Map({

  container: 'map',
  style    : 'mapbox://styles/hdewey/cjqwz5v1n9qcn2so9b3c7eaah',
  center   : [-97.816540, 30.330070],
  zoom     : 14
});

var socket = io();

$(function () {

  var socket = io();

  $('form').submit(function(e){
    e.preventDefault();
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});
