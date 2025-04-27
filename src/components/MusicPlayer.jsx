import { useState, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; 

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-md p-3 rounded-full flex items-center cursor-pointer">
      <audio ref={audioRef} loop>
        <source src="/wedding-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay} className="text-pink-500 text-2xl">
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </div>
  );
}

export default MusicPlayer;
