"use client";
import { VideoIcon } from "@/assets/icons";
import React, { useRef, useState } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowControls(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div className="relative mt-8 flex aspect-video lg:w-1/2 w-full items-center justify-center md:mt-0">
      <video
        ref={videoRef}
        controls={showControls}
        onPlay={handlePlay}
        onPause={handlePause}
        className="w-full h-full"
      >
        <source
          src="https://7span-product.b-cdn.net/59a18bf3-cbc2-43a2-a439-f74e15df00ef.mp4"
          type="video/mp4"
        />
      </video>
      {!isPlaying && (
        <div
          onClick={togglePlayPause}
          className="absolute cursor-pointer flex justify-center items-center rounded-full"
        >
          <VideoIcon className="w-8 h-8 lg:w-16 lg:h-16" />
        </div>
      )}
    </div>
  );
};
