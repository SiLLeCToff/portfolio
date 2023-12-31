"use client"
import React, { useEffect, useRef } from 'react';
import styles from '../../page.module.css'

const YoutubeVideo: React.FC = () => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    let player: any;

    useEffect(() => {
        const loadYoutubeScript = () => {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        };

        // Ожидаем загрузку YouTube API
        loadYoutubeScript();

        // Функция создания плеера
        const onYouTubeIframeAPIReady = () => {
            player = new (window as any).YT.Player('youtube-player', {
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

        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

        const handleScroll = () => {
            if (!player || !videoRef.current) return;

            const rect = videoRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isInView && player.getPlayerState() !== -1) {
                player.playVideo();
            } else if (!isInView && player.getPlayerState() === 1) {
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

            <div className="flex absolute z-50  xl:w-[1000px] xl:h-[600px] md:w-[600px] md:h-[370px] sm:w-[460px] sm:h-[280px] max-sm:w-[300px] max-sm:h-[200px] justify-center" ref={videoRef}>
                <div className={styles.bg}/>
                <div id="youtube-player" />
            </div>

    );
};

export default YoutubeVideo;