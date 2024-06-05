"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { FaPause, FaBackward, FaForward, FaTimes } from 'react-icons/fa';
import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
import { ShuffleIcon } from "./ShuffleIcon";
import Image from 'next/image';
import "@/styles/music.css";

interface SpotifySong {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

const defaultImageUrl = "/footerGif.gif"; // Update this to the path of your default image

const Spoti: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(128); // Setting duration to 2:08 (128 seconds)
  const [song, setSong] = useState<SpotifySong | null>(null);
  const [playing, setPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(event.target.value));
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  };

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
        progressBarRef.current.max = String(audioRef.current.duration ?? 128);
      }
    };

    const interval = setInterval(() => {
      if (audioRef.current && playing) {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= (audioRef.current?.duration ?? 128)) {
            clearInterval(interval);
            return audioRef.current?.duration ?? 128;
          }
          if (audioRef.current) {
            audioRef.current.currentTime = newProgress;
          }
          return newProgress;
        });
      }
    }, 1000);

    updateProgressValue();

    return () => clearInterval(interval);
  }, [playing]);

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

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Card
      className="spotify border-none max-w-[610px] bg-gradient-to-r from-gray-200 to-gray-400 backdrop-blur-lg p-4 rounded-lg shadow-lg "
      shadow="sm"
    >
      <div className="svg-icon z-50 " style={{ position: 'absolute', top: -5, left: 0, transform: 'rotate(5deg)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 100 100">
          {/* SVG content */}
        </svg>
      </div>
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-4 items-center justify-center">
          <div className="col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover rounded-lg shadow-md"
              height={200}
              src={song?.albumImageUrl || defaultImageUrl}
              width={200} // Bu satırı güncelledik
              layout="responsive"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-bold text-foreground/90 text-gray-700">
                  {song ? song.album : "No music is currently playing"}
                </h3>
                <p className="text-sm text-foreground/80 font-bold">{song?.artist || ""}</p>
                <h1 className="text-sm mt-2 font-bold">{song?.title || ""}</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <div className="progressbar">
                <input
                  type="range"
                  id="progress-bar"
                  ref={progressBarRef}
                  min="0"
                  max="128"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between">
                <p className="text-sm">{Math.floor(progress / 60)}:{Math.floor(progress % 60).toString().padStart(2, '0')}</p>
                <p className="text-sm text-foreground/50">2:08</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center ">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10  mr-2"
                radius="full" 
                variant="light"
                onPress={() => {/* Repeat one functionality */}}
              >
                <RepeatOneIcon className="" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={previousSong}
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={playPause}
              >
                <PauseCircleIcon size={42} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={nextSong}
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10 ml-2"
                radius="full"
                variant="light"
                onPress={() => {/* Shuffle functionality */}}
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
      <audio ref={audioRef} />
    </Card>
  );
}

export default Spoti;
