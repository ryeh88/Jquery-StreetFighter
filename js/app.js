$(document).ready(function(){
    // Mouse Focus on Character
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
   // Mouse Focus Off Character
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
   // Left Click Down
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    // Left Click Let Go
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    // When X key is pressed and let go

   $(document).keydown(function (e) {
   		if (e.keyCode == 88) {
   			$('.ryu-still').hide();
   			$('.ryu-ready').hide();
   			$('.ryu-throwing').hide();
   			$('.hadouken').hide();
   			$('.ryu-cool').show();
   		}
   }) .keyup(function (e) {
   		if (e.keyCode == 88) {
   			$('.ryu-still').hide();
   			$('.ryu-ready').show();
   			$('.ryu-throwing').hide();
   			$('.hadouken').hide();
   			$('.ryu-cool').hide();
   		}

   });
});

// Hadouken Sound

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

