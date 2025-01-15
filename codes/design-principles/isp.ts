interface MediaPlayer {
    playAudio(): void;
    recordAudio(): void;
}

class AudioPlayer implements MediaPlayer {
    playAudio() {
        // Implementation for playing audio
    }

    recordAudio() {
        // Implementation for recording audio
    }
}

// we have violated the ISP because the VideoPlayer class is forced to implement the recordAudio method even though it has no meaningful use for it. 
class VideoPlayer implements MediaPlayer {
    playAudio() {
        // Implementation for playing audio of the video
    }

    recordAudio() {
        // This method is irrelevant for video playback
    }
}
