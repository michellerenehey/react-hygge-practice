import { useState } from 'react';
import Sound from 'react-sound';
import rain from '../../rain-sound.mp3';

const PlaySound = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play some rain sounds...' : 'Stop the sounds'}
      </button>
      <Sound
        url={rain}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default PlaySound;
