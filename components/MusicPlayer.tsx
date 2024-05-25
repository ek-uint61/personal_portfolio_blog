import React, { useState, useRef, useEffect } from 'react';
import { FaPause, FaBackward, FaForward, FaTimes } from 'react-icons/fa';
import Draggable from 'react-draggable';

const songs = [
  // Too Many Nights
  "https://audmak.icu/wp-content/uploads/2024/03/09.%20Cinderella%20-%20%28Hiphopde.com%29.mp3",
  // Cinderella
  "https://audmak.icu/wp-content/uploads/2024/03/09.%20Cinderella%20-%20%28Hiphopde.com%29.mp3",
  // Am I Dreaming
  "https://audmak.icu/wp-content/uploads/2024/03/09.%20Cinderella%20-%20%28Hiphopde.com%29.mp3",
  // Mr. Right Now
  "https://offblogmedia.com/wp-content/uploads/2024/03/21_Savage_Metro_Boomin_Ft_Drake_-_Mr_Right_Now_Offblogmedia.com.mp3"
];

const thumbnails = [
  // Heroes & Villains
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metroboomin2.gif",
  // We Don't Trust You
  "https://64.media.tumblr.com/beac6dd5865086ce08ad6aeb3faee45e/tumblr_ouhekhfFHO1ukqbp7o1_400.gif",
  // Metro Spider
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metroboomin4.gif",
  // Savage Mode II
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/21xmetro.gif"
];

const backgrounds = [
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/HeroesVillains2.png",
  "https://assets.codepen.io/4927073/433452617_952539916241903_4937267218052324278_n.jpg",
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metrospider.png",
  "https://media.pitchfork.com/photos/5f7b3ba12dd72c64377cf95b/1:1/w_3000,h_3000,c_limit/savage%20mode%202_21%20savage%20metro%20boomin.jpg"
];

const songArtists = [
  "Metro Boomin",
  "Metro Boomin, Future",
  "Metro Boomin, A$AP Rocky",
  "Metro Boomin"
];

const songTitles = [
  "Too Many Nights <span id='h2'>(feat. Don Toliver &amp; Future)</span>",
  "Cinderella",
  "Am I Dreaming",
  "Mr. Right Now <span id='h2'>(feat. Drake)</span>"
];

const songColors = ["white", "#b41c10", "white", "white"];

const MusicPlayer = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateProgressValue = () => {
      if (audioRef.current && progressBarRef.current) {
        progressBarRef.current.max = String(audioRef.current.duration);
        progressBarRef.current.value = String(audioRef.current.currentTime);
      }
    };

    const interval = setInterval(updateProgressValue, 500);
    return () => clearInterval(interval);
  }, []);

  const playPause = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  const nextSong = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const previousSong = () => {
    setSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const changeProgressBar = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[songIndex];
      audioRef.current.play();
      setPlaying(true);
    }
  }, [songIndex]);

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Draggable>
      <div className="music-container">
        <audio ref={audioRef} />
        <div className="container">
          <div className="close-icon" onClick={handleClose}>
            <FaTimes />
          </div>
          <div className="track_image">
            <div className="vinylcover" />
            <img src={thumbnails[songIndex]} id="thumbnail" alt="Album cover" />
          </div>
          <div className="songtitles text-black">
            <div className="song-title text-black">
              <span dangerouslySetInnerHTML={{ __html: songTitles[songIndex] }} />
            </div>
            <div className="song-artist text-black">{songArtists[songIndex]}</div>
          </div>
          <div className="progressbar">
            <input
              type="range"
              id="progress-bar"
              ref={progressBarRef}
              min="0"
              max=""
              value="0"
              onChange={changeProgressBar}
            />
          </div>
          <div className="trackbuttons">
            <div className="mybutton border-2 border-black" onClick={previousSong}>
              <FaBackward />
            </div>
            <div className="mybutton border-2 border-black" onClick={playPause}>
              <FaPause />
            </div>
            <div className="mybutton border-2 border-black" onClick={nextSong}>
              <FaForward />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;
