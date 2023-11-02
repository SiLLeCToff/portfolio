"use client"

import React, { useEffect, useRef } from 'react';

const YoutubeVideo: React.FC = () => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    let player: any;

    useEffect(() => {
        // Загрузка YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Функция создания плеера
        const onYouTubeIframeAPIReady = () => {
            player = new YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: 'xIbS1QZC55M',
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
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

        const handleScroll = () => {
            if (!player || !videoRef.current) return;

            const rect = videoRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isInView && player.getPlayerState() !== YT.PlayerState.PLAYING) {
                player.playVideo();
            } else if (!isInView && player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onPlayerReady = (event: any) => {
        player = event.target;
    };

    return (
        <div className="flex xl:w-[1050px] xl:h-[655px] sm:w-[80%] sm:h-[500px] max-sm:w-[100%] max-sm:h-[300px] justify-center" ref={videoRef}>
            <div id="youtube-player" />
        </div>
    );
};

export default YoutubeVideo;