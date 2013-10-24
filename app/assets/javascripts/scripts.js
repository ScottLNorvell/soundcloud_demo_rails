
var oembed_obj, song;

$(function() {
  SC.initialize({
    client_id: '560d601638096e37de666da699486214'
  })

  $('#widget-button').on('click', function() {
    var url = $('#widget-track-url').val();

    SC.oEmbed(url, {color: "ff6600", show_comments: false},  function(oembed) { 
      console.log("oEmbed response: ", oembed); 
      oembed_obj = oembed;
      // $('#widget').html(oembed.html);
    });
  });

  $('#stream-button').on('click', function() {
    var url = $('#stream-track-url').val();
    SC.get('/resolve', {url: url }, function(track) {
      SC.stream('/tracks/' + track.id, function(sound) {
        song = sound;
      })
    });

  });


});