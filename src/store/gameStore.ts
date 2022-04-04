import { makeAutoObservable } from "mobx";

class GameStore {
    game = false;
    gameBlock = false;
    gameOver = false;

    constructor() {
        makeAutoObservable(this);
    }

    setGame = (val: boolean) => {
        this.game = val;
    };

    setGameBlock = () => {
        this.gameBlock = !this.gameBlock;
    };

    setGameOver = (val: boolean) => {
        this.gameOver = val;
    };

    reset = () => {
        this.setGameOver(false);
        this.setGame(false);
        this.setGameBlock();
    }
}

export default GameStore;