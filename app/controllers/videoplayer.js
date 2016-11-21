var videoPlayer;
var videoPlayerIsPlay = false;
var tempoAssistido = 0;

function doOpen() {
  // var activeMovie = Titanium.Media.createVideoPlayer({
  //   url : 'http://www.w3schools.com/html/mov_bbb.mp4',
  //   movieControlStyle : Titanium.Media.VIDEO_CONTROL_EMBEDDED,
  //   autoplay : true
  // });

  videoPlayer = Titanium.Media.createVideoPlayer({
      // top : 2,
      //autoplay : true,
      backgroundColor : '#FF00FF',
      height : 185,
      width : Ti.UI.FILL,
      movieControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
      scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
      // url : 'http://www.w3schools.com/html/mov_bbb.mp4',
      url : 'http://www.chiquitto.com.br/video.mp4',
      //fullscreen: true
  });
  videoPlayer.addEventListener('playbackState', playbackStateChange);

  $.view.add(videoPlayer);
}

function playbackStateChange(event)
{
  videoPlayerIsPlay = (event.playbackState == 1);
  contarTempoAssistido();
}

function contarTempoAssistido() {
  istoTempoAssistido = Math.ceil(videoPlayer.getCurrentPlaybackTime() / 1000);

  if (istoTempoAssistido > tempoAssistido) {
    tempoAssistido = istoTempoAssistido;
    console.log('tempoAssistido', tempoAssistido);
    $.resultado.text = 'Tempo Assistido:' + tempoAssistido;
    // enviar dados para a API
  }

  if (videoPlayerIsPlay) {
    setTimeout(contarTempoAssistido, 2000);
  }
}

// $.index.open();
doOpen($.args || {});
