"use client"
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = () => {
    const [player, setPlayer] = useState<YouTube | null>(null);
    const videoRef = useRef<HTMLDivElement | null>(null);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            iv_load_policy: 3,
            loop: 1,
            mute: 1,
            showinfo: 0,
        },
    };

    const onPlayerReady = (event: { target: YouTube }) => {
        setPlayer(event.target);
    };

    useEffect(() => {
        const handleScroll = () => {
            const rect : any = videoRef.current?.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isInView && player) {
                player.playVideo();
            } else if (player) {
                player.pauseVideo();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [player]);

    return (
        <div className="flex bg-red-50  xl:w-[1050px] xl:h-[655px] sm:w-[80%] sm:h-[500px] max-sm:w-[100%] max-sm:h-[300px] justify-center" ref={videoRef}>
            <YouTube videoId="xIbS1QZC55M" opts={opts} className="flex w-full" onReady={onPlayerReady} />
        </div>
    );
};

export default YoutubeVideo;