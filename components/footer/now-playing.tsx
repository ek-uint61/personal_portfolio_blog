"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.
import Draggable from 'react-draggable';
import { FaPause, FaBackward, FaForward, FaTimes } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';
import "@/styles/music.css";

interface SpotifySong {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

const NowPlaying = () => {
    const [song, setSong] = useState<SpotifySong | null>(null);
    const [playing, setPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      const fetchNowPlaying = async () => {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        setSong(data);
        if (data.isPlaying && audioRef.current) {
          audioRef.current.src = data.songUrl;
          audioRef.current.play();
          setPlaying(true);
        }
      };
  
      fetchNowPlaying();
    }, []);
  
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
      // Here you would fetch the next song from Spotify API
    };
  
    const previousSong = () => {
      // Here you would fetch the previous song from Spotify API
    };
  
    const changeProgressBar = () => {
      if (audioRef.current && progressBarRef.current) {
        audioRef.current.currentTime = Number(progressBarRef.current.value);
      }
    };
  
    const handleClose = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsVisible(false);
    };
  
    if (!isVisible || !song) return null;
  
    return (
      <div className="music-container">
        <audio ref={audioRef} />
        <div className="container">
          <div className="close-icon" onClick={handleClose}>
            <FaTimes />
          </div>
          <div className="svg-icon" style={{ position: 'absolute', top: -20, left: -20, transform: 'rotate(5deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 100 100">
<path fill="#444445" d="M73.923,82H26.077C21.616,82,18,78.384,18,73.923V26.077C18,21.616,21.616,18,26.077,18h47.846 C78.384,18,82,21.616,82,26.077v47.846C82,78.384,78.384,82,73.923,82z"></path><circle cx="50" cy="50" r="22" fill="#70b570"></circle><path fill="#444445" d="M63.785,47.921c-0.386,0-0.776-0.103-1.129-0.317c-10.585-6.439-24.768-2.715-24.91-2.676 c-1.16,0.312-2.355-0.372-2.669-1.53c-0.315-1.159,0.368-2.353,1.527-2.669c0.652-0.178,16.105-4.269,28.315,3.157 c1.027,0.624,1.353,1.964,0.728,2.99C65.236,47.549,64.52,47.921,63.785,47.921z"></path><path fill="#444445" d="M61.384,55.188c-0.33,0-0.665-0.088-0.968-0.272c-9.158-5.57-21.339-2.34-21.461-2.307 c-0.994,0.272-2.02-0.315-2.291-1.308c-0.271-0.994,0.315-2.02,1.309-2.291c0.561-0.153,13.869-3.676,24.381,2.718 c0.88,0.535,1.16,1.683,0.625,2.563C62.628,54.87,62.013,55.188,61.384,55.188z"></path><path fill="#444445" d="M58.546,61.605c-0.264,0-0.532-0.07-0.774-0.217c-7.641-4.648-17.804-1.954-17.906-1.926 c-0.794,0.215-1.615-0.252-1.831-1.046c-0.217-0.794,0.252-1.615,1.046-1.831c0.466-0.126,11.515-3.052,20.24,2.256 c0.704,0.428,0.927,1.345,0.499,2.049C59.54,61.35,59.049,61.605,58.546,61.605z"></path><path fill="#1f212b" d="M74.874,19.1c3.322,0,6.025,2.703,6.025,6.026v49.75c0,3.322-2.703,6.025-6.025,6.025H25.125 c-3.323,0-6.026-2.703-6.026-6.025v-49.75c0-3.323,2.703-6.026,6.026-6.026H74.874 M74.874,17H25.125 C20.637,17,17,20.637,17,25.125v49.75C17,79.362,20.637,83,25.125,83h49.75C79.362,83,83,79.362,83,74.874V25.125 C83,20.637,79.362,17,74.874,17L74.874,17z"></path><path fill="#1f212b" d="M60,42.087c-0.057,0-0.115-0.01-0.172-0.03c-1.551-0.566-3.207-1.022-4.923-1.354 c-0.271-0.053-0.448-0.315-0.396-0.586c0.053-0.272,0.318-0.447,0.586-0.396c1.769,0.343,3.477,0.813,5.077,1.397 c0.259,0.095,0.393,0.382,0.298,0.642C60.396,41.961,60.204,42.087,60,42.087z"></path><path fill="#1f212b" d="M63.818,48.499c-0.487,0-0.968-0.135-1.39-0.391c-10.424-6.34-24.408-2.663-24.548-2.624 c-1.425,0.382-2.901-0.463-3.286-1.884c-0.388-1.424,0.456-2.897,1.879-3.286c0.296-0.08,7.325-1.96,15.581-1.053 c0.274,0.03,0.473,0.277,0.442,0.552c-0.031,0.274-0.288,0.467-0.552,0.442c-8.067-0.89-14.921,0.945-15.208,1.023 c-0.892,0.243-1.42,1.167-1.178,2.06c0.241,0.891,1.169,1.426,2.06,1.18c0.142-0.039,14.487-3.86,25.328,2.735 c0.778,0.47,1.841,0.204,2.309-0.563c0.48-0.79,0.229-1.825-0.563-2.306c-0.918-0.559-1.894-1.072-2.899-1.528 c-0.252-0.113-0.363-0.409-0.249-0.661c0.113-0.252,0.412-0.362,0.661-0.249c1.043,0.472,2.055,1.005,3.007,1.584 c1.262,0.767,1.664,2.418,0.897,3.681C65.618,48.019,64.762,48.499,63.818,48.499z"></path><path fill="#1f212b" d="M61.315,55.5c-0.43,0-0.853-0.113-1.221-0.329c-8.908-5.202-20.988-2.196-21.109-2.165 c-1.251,0.328-2.554-0.393-2.898-1.605c-0.166-0.581-0.091-1.191,0.211-1.719c0.313-0.548,0.829-0.94,1.454-1.103 c0.569-0.149,14.076-3.593,24.787,2.664c0.55,0.321,0.935,0.831,1.082,1.437c0.145,0.594,0.043,1.207-0.285,1.727 C62.9,55.092,62.146,55.5,61.315,55.5z M47.195,51.087c4.101,0,9.063,0.686,13.403,3.221c0.63,0.368,1.511,0.163,1.893-0.438 c0.182-0.287,0.238-0.626,0.158-0.953c-0.083-0.34-0.301-0.627-0.614-0.811c-10.359-6.05-23.478-2.706-24.03-2.561 c-0.362,0.095-0.66,0.319-0.839,0.632c-0.167,0.292-0.209,0.629-0.118,0.949c0.198,0.694,0.957,1.101,1.687,0.911 C39.007,51.968,42.548,51.087,47.195,51.087z"></path><path fill="#1f212b" d="M50.001,59.271c-0.02,0-0.039-0.001-0.059-0.003c-1.561-0.183-3.214-0.221-4.912-0.118 c-0.285,0.024-0.513-0.193-0.529-0.469s0.193-0.513,0.469-0.529c1.756-0.109,3.469-0.067,5.088,0.122 c0.274,0.032,0.471,0.28,0.439,0.555C50.467,59.083,50.251,59.271,50.001,59.271z"></path><path fill="#1f212b" d="M58.635,62.048c-0.365,0-0.724-0.101-1.036-0.291c-1.397-0.85-2.986-1.506-4.723-1.951 c-0.268-0.068-0.429-0.341-0.36-0.608c0.068-0.267,0.338-0.429,0.608-0.36c1.833,0.47,3.513,1.165,4.994,2.066 c0.455,0.276,1.091,0.122,1.369-0.334c0.284-0.468,0.135-1.083-0.335-1.369c-8.557-5.204-19.46-2.332-19.919-2.207 c-0.529,0.145-0.843,0.692-0.698,1.224c0.146,0.528,0.694,0.843,1.225,0.698c0.001,0,0.801-0.218,2.162-0.433 c0.265-0.042,0.529,0.144,0.572,0.416c0.043,0.273-0.144,0.529-0.416,0.572c-1.286,0.202-2.046,0.406-2.053,0.408 c-1.066,0.288-2.165-0.339-2.455-1.399c-0.289-1.063,0.34-2.162,1.401-2.451c0.478-0.13,11.781-3.107,20.701,2.318 c0.939,0.573,1.239,1.804,0.669,2.743C59.975,61.69,59.337,62.048,58.635,62.048z"></path><path fill="#1f212b" d="M50,72.5c-12.406,0-22.5-10.094-22.5-22.5S37.594,27.5,50,27.5S72.5,37.594,72.5,50 S62.406,72.5,50,72.5z M50,28.5c-11.855,0-21.5,9.645-21.5,21.5S38.145,71.5,50,71.5S71.5,61.855,71.5,50S61.855,28.5,50,28.5z"></path><path fill="#1f212b" d="M22.5,30c-0.276,0-0.5-0.224-0.5-0.5v-2.962C22,24.036,24.036,22,26.538,22H31.5 c0.276,0,0.5,0.224,0.5,0.5S31.776,23,31.5,23h-4.962C24.587,23,23,24.587,23,26.538V29.5C23,29.776,22.776,30,22.5,30z"></path><path fill="#1f212b" d="M29.5,78h-2.962C24.036,78,22,75.964,22,73.462V49.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v23.962C23,75.413,24.587,77,26.538,77H29.5c0.276,0,0.5,0.224,0.5,0.5S29.776,78,29.5,78z"></path><path fill="#1f212b" d="M73.462,78H61c-0.276,0-0.5-0.224-0.5-0.5S60.724,77,61,77h12.462C75.413,77,77,75.413,77,73.462 V47.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v25.962C78,75.964,75.964,78,73.462,78z"></path><path fill="#1f212b" d="M77.5,48.5c-0.276,0-0.5-0.224-0.5-0.5V26.538C77,24.587,75.413,23,73.462,23H69 c-0.276,0-0.5-0.224-0.5-0.5S68.724,22,69,22h4.462C75.964,22,78,24.036,78,26.538V48C78,48.276,77.776,48.5,77.5,48.5z"></path><path fill="#1f212b" d="M52.5,23h-3c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5 S52.776,23,52.5,23z"></path><path fill="#1f212b" d="M46.5,23h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S46.776,23,46.5,23z"></path><path fill="#1f212b" d="M38.5,78h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S38.776,78,38.5,78z"></path><path fill="#1f212b" d="M57.5,78h-14c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h14c0.276,0,0.5,0.224,0.5,0.5 S57.776,78,57.5,78z"></path>
</svg>          </div>
          <div className="track_image">
            <div className="vinylcover" />
            <img src={song.albumImageUrl} id="thumbnail" alt="No music is currently playing" />
          </div>
          <div className="songtitles">
            <div className="song-title">
              <span>{song.title}</span>
            </div>
            <div className="song-artist">{song.artist}</div>
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
            <div className="mybutton" onClick={previousSong}>
              <FaBackward />
            </div>
            <div className="mybutton" onClick={playPause}>
              <FaPause />
            </div>
            <div className="mybutton" onClick={nextSong}>
              <FaForward />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default NowPlaying;
