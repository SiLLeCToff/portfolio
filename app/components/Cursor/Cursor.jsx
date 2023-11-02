"use client"
import React, {useEffect, useRef, useState} from 'react';
import styles from './Cursor.module.css' // Подключите файл стилей
const Cursor = () => {
    const [isCursorHidden, setIsCursorHidden] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Подписываемся и отписываемся от события mousemove при монтировании и размонтировании компонента

    useEffect(() => {
        const handleMouseLeave = () => {
            setIsCursorHidden(true);
        };

        const handleMouseEnter = () => {
            setIsCursorHidden(false);
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []); // Подписываемся и отписываемся от событий mouseleave и mouseenter при монтировании и размонтировании компонента

    const cursorClasses = `${styles.cursor} ${styles.small} ${isCursorHidden ? styles.hiddenn : ''}`;

    const cursorStyles = {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,

    };
    return <div className={cursorClasses} style={cursorStyles} />;
};

export default Cursor;