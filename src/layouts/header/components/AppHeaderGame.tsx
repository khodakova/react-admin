import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useStore } from "@src/store/store";

const AppHeaderGame: React.FC = () => {
    const chickenRef = useRef(null);
    const bonfireRef = useRef(null);
    const [jump, setJump] = useState<boolean>(false);
    const { gameStore: { game, setGame, gameOver, setGameBlock, setGameOver, reset } } = useStore();
    // eslint-disable-next-line prefer-const
    let [count, setCount] = useState(0);

    const chickenJump = (e: any) => {
        if (e.code === 'Space') {
            setJump(true);
            if (!gameOver) {
                setCount(count++);
            }
            if (!game) {
                setGame(true);
            }
        }

        setTimeout(() => {
            setJump(false);
        }, 400)
    };

    useEffect(() => {
        const isAlive = setInterval(function () {
            if (!gameOver && game) {
                // @ts-ignore
                const chickenTop = parseInt(window.getComputedStyle(chickenRef.current).getPropertyValue("top"));

                const bonfireLeft = parseInt(
                    // @ts-ignore
                    window.getComputedStyle(bonfireRef.current).getPropertyValue("left")
                );

                if (bonfireLeft < 120 && bonfireLeft > 40 && chickenTop >= 130) {
                    setGameOver(true);
                    setTimeout(() => alert("Game Over!"), 100);
                    setTimeout(() => setGameBlock(), 2000);
                }
            }
        }, 50);

        return () => clearInterval(isAlive)
    }, [game]);

    useEffect(() => {
        document.addEventListener('keydown', (e) => chickenJump(e));
        return (document.removeEventListener('keydown', (e) => chickenJump(e)))
    }, []);

    return (
        <div className={ cn('game', { 'gameOver': gameOver }) }>
            <div className='count'>Ваш счет: { count }</div>
            <div id='chicken'
                 ref={ chickenRef }
                 className={ cn({ 'jump': jump }) }
                 onKeyDown={ chickenJump }
            />
            <div id='bonfire'
                 ref={ bonfireRef }
                 className={ cn({ 'on': game }) }
            />
            <div id='unicorn'/>
            <div id='cloud1' className={ cn({ 'cloud1__on': game }) }/>
            <div id='cloud2' className={ cn({ 'cloud2__on': game }) }/>
        </div>
    );
};

export default AppHeaderGame;