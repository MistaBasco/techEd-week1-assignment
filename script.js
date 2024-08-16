window.onload = function () {
  var iframeElement = document.getElementById("soundcloud-player");
  var widget = SC.Widget(iframeElement);

  widget.setVolume(0.5); // Set volume to 50%
  widget.play(); // Start playing
};
