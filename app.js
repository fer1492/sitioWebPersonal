
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: 'p_6cXZj622g', // Video predeterminado al cargar la página
    });
}

function loadVideo(videoId) {
    player.loadVideoById(videoId);
}

