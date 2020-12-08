var audio = document.getElementById("myaudio");
audio.volume = 0.5;

$("#amerika-click").click(function() {
  $("#audiosource").attr("src","./songs/amerika.mp3");
  audio.load();
  audio.play();
});

$("#outcast-click").click(function() {
  $("#audiosource").attr("src","./songs/outcast.mp3");
  audio.load();
  audio.play();
});

$("#stan-click").click(function() {
  $("#audiosource").attr("src","./songs/stan.mp3");
  audio.load();
  audio.play();
});

$("#guitar-click").click(function() {
  $("#audiosource").attr("src","./songs/whilemyguitar.mp3");
  audio.load();
  audio.play();
});

$("#insidehouse-click").click(function() {
  $("#audiosource").attr("src","./songs/insidemyhouseallday.mp3");
  audio.load();
  audio.play();
});

$("#nikki-click").click(function() {
  $("#audiosource").attr("src","./songs/nikki.mp3");
  audio.load();
  audio.play();
});

$("#slideaway-click").click(function() {
  $("#audiosource").attr("src","./songs/slideaway.mp3");
  audio.load();
  audio.play();
});

$("#intoyourarms-click").click(function() {
  $("#audiosource").attr("src","./songs/intoyourarms.mp3");
  audio.load();
  audio.play();
});

$("#mobydick-click").click(function() {
  $("#audiosource").attr("src","./songs/mobydick.mp3");
  audio.load();
  audio.play();
});

$("#broken-click").click(function() {
  $("#audiosource").attr("src","./songs/broken.mp3");
  audio.load();
  audio.play();
});

$("#imissthedays-click").click(function() {
  $("#audiosource").attr("src","./songs/imissthedays.mp3");
  audio.load();
  audio.play();
});

$("#lonelynomore-click").click(function() {
  $("#audiosource").attr("src","./songs/lonelynomore.mp3");
  audio.load();
  audio.play();
});

$("#overmyhead-click").click(function() {
  $("#audiosource").attr("src","./songs/overmyhead.mp3");
  audio.load();
  audio.play();
});

$("#yesterday-click").click(function() {
  $("#audiosource").attr("src","./songs/yesterday.mp3");
  audio.load();
  audio.play();
});

$("#moodswings-click").click(function() {
  $("#audiosource").attr("src","./songs/moodswings.mp3");
  audio.load();
  audio.play();
});

$("#smallbump-click").click(function() {
  $("#audiosource").attr("src","./songs/smallbump.mp3");
  audio.load();
  audio.play();
});

$("#mockingbird-click").click(function() {
  $("#audiosource").attr("src","./songs/mockingbird.mp3");
  audio.load();
  audio.play();
});

$("#runaway-click").click(function() {
  $("#audiosource").attr("src","./songs/runaway.mp3");
  audio.load();
  audio.play();
});

$("#everythingwillbeok-click").click(function() {
  $("#audiosource").attr("src","./songs/everythingwillbeok.mp3");
  audio.load();
  audio.play();
});

$("#lastletter-click").click(function() {
  $("#audiosource").attr("src","./songs/lastletter.mp3");
  audio.load();
  audio.play();
});
$("#medium-click").click(function() {
  $("#audiosource").attr("src","./songs/medium.mp3");
  audio.load();
  audio.play();
});

$("#ineedsomesleep-click").click(function() {
  $("#audiosource").attr("src","./songs/ineedsomesleep.mp3");
  audio.load();
  audio.play();
});

$("#howcouldyouleaveus-click").click(function() {
  $("#audiosource").attr("src","./songs/howcouldyouleaveus.mp3");
  audio.load();
  audio.play();
});

$("#theunknown-click").click(function() {
  $("#audiosource").attr("src","./songs/theunknown.mp3");
  audio.load();
  audio.play();
});

$("#toysoldiers-click").click(function() {
  $("#audiosource").attr("src","./songs/liketoysoldiers.mp3");
  audio.load();
  audio.play();
});

var play = true;

function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar
                event.preventDefault();
                if (play) {
                    audio.pause();
                    play = false;
                } else {
                    audio.play();
                    play = true;
                }
                break;
        }
  return false;
}

window.addEventListener("keydown", onKeyDown, false);
