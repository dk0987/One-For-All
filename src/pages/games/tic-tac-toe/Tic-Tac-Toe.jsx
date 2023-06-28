import '../../../index.css'
import './Tic-Tac-Toe.css'
import X from '../../../image/x.png'
import O from '../../../image/0.png'
import { useState } from 'react'

import { Outlet, Link } from "react-router-dom";

function Tic_Tac_Toe() {

    let [xTurn, setXTurn] = useState(true)
    let [boardSquareVisible, setBoardSquareVisible] = useState([false, false, false, false, false, false, false, false, false]);
    let [turnVisible, setTurnVisible] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
    let [player1Win, setPlayer1Win] = useState(0)
    let [player1Loose, setPlayer1Loose] = useState(0)
    let [player2Win, setPlayer2Win] = useState(0)
    let [player2Loose, setPlayer2Loose] = useState(0)

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log(squares);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] !== -1 && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] === 1) {
                    console.log("X win")
                    setPlayer1Win(player1Win + 1);
                    setPlayer2Loose(player2Loose + 1);
                }
                else {
                    console.log("0 win")

                    setPlayer2Win(player2Win + 1);
                    setPlayer1Loose(player1Loose + 1);
                }
                reset();
                return [a, b, c];
            }
        }
        return null;
    }

    const handleUpdate = (index, todo) => {
        const newTurnVisible = [...turnVisible];
        newTurnVisible[index] = todo;
        setTurnVisible(newTurnVisible);
        calculateWinner(newTurnVisible);
    }

    const reset = () => {
        setXTurn(true);
        setBoardSquareVisible([false, false, false, false, false, false, false, false, false]);
        setTurnVisible([-1, -1, -1, -1, -1, -1, -1, -1, -1])
    }

    return (
        <div className="tic-tac-toe |  row-for-desktop column-for-mobile ">

            <div className="player1-score | grid">
                <div className="player-and-x | flex fx-ai-c fx-jc-c">
                    <h3 className='bold uppercase letter-spacing'>Player 1 </h3>
                    <img src={X} alt="" className='game-option ' />
                </div>
                <div className="win | flex fx-ai-c fx-jc-sb">
                    <h4 className=' uppercase letter-spacing start'>Win</h4>
                    <h6 className=' bold uppercase letter-spacing end'>{player1Win}</h6>
                </div>
                <div className="loose | flex fx-ai-c fx-jc-sb">
                    <h4 className=' uppercase letter-spacing start'>Loose</h4>
                    <h6 className=' bold uppercase letter-spacing end'>{player1Loose}</h6>
                </div>
            </div>

            <div className="game-buttons">

                <div className="game">
                    <div className="row1 | flex">
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 0),
                                    existingItem[0] = true,
                                    ...existingItem.slice(0 + 1),
                                ]
                            })
                            handleUpdate(0, xTurn ? 1 : 0)
                            setXTurn(!xTurn)
                        }}>
                            <img src={turnVisible[0] ? X : O} alt="" className={!boardSquareVisible[0] ? 'hide' : ''} />
                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c " onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 1),
                                    existingItem[1] = true,
                                    ...existingItem.slice(1 + 1),
                                ]
                            })
                            handleUpdate(1, xTurn ? 1 : 0)
                            setXTurn(!xTurn)

                        }}>
                            <img src={turnVisible[1] === 1 ? X : O} alt="" className={!boardSquareVisible[1] ? 'hide' : ''} />

                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 2),
                                    existingItem[2] = true,
                                    ...existingItem.slice(2 + 1),
                                ]
                            })
                            handleUpdate(2, xTurn ? 1 : 0)
                            setXTurn(!xTurn)

                        }}>
                            <img src={turnVisible[2] === 1 ? X : O} alt="" className={!boardSquareVisible[2] ? 'hide' : ''} />
                        </div>
                    </div>
                    <div className="row2 | flex">
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 3),
                                    existingItem[3] = true,
                                    ...existingItem.slice(3 + 1),
                                ]
                            })
                            handleUpdate(3, xTurn ? 1 : 0)
                            setXTurn(!xTurn)


                        }}>
                            <img src={turnVisible[3] === 1 ? X : O} alt="" className={!boardSquareVisible[3] ? 'hide' : ''} />

                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 4),
                                    existingItem[4] = true,
                                    ...existingItem.slice(4 + 1),
                                ]
                            })
                            handleUpdate(4, xTurn ? 1 : 0)
                            setXTurn(!xTurn)


                        }} >
                            <img src={turnVisible[4] === 1 ? X : O} alt="" className={!boardSquareVisible[4] ? 'hide' : ''} />

                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 5),
                                    existingItem[5] = true,
                                    ...existingItem.slice(5 + 1),
                                ]
                            })
                            handleUpdate(5, xTurn ? 1 : 0)
                            setXTurn(!xTurn)
                        }}>
                            <img src={turnVisible[5] === 1 ? X : O} alt="" className={!boardSquareVisible[5] ? 'hide' : ''} />
                        </div>
                    </div>
                    <div className="row3 | flex">
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 6),
                                    existingItem[6] = true,
                                    ...existingItem.slice(6 + 1),
                                ]
                            })
                            handleUpdate(6, xTurn ? 1 : 0)
                            setXTurn(!xTurn)

                        }}>
                            <img src={turnVisible[6] === 1 ? X : O} alt="" className={!boardSquareVisible[6] ? 'hide' : ''} />

                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 7),
                                    existingItem[7] = true,
                                    ...existingItem.slice(7 + 1),
                                ]
                            })
                            handleUpdate(7, xTurn ? 1 : 0)
                            setXTurn(!xTurn)

                        }} >
                            <img src={turnVisible[7] === 1 ? X : O} alt="" className={!boardSquareVisible[7] ? 'hide' : ''} />

                        </div>
                        <div className="square | flex fx-ai-c fx-jc-c" onClick={() => {
                            setBoardSquareVisible(existingItem => {
                                return [
                                    ...existingItem.slice(0, 8),
                                    existingItem[8] = true,
                                    ...existingItem.slice(8 + 1),
                                ]
                            })
                            handleUpdate(8, xTurn ? 1 : 0)
                            setXTurn(!xTurn)


                        }} >
                            <img src={turnVisible[8] === 1 ? X : O} alt="" className={!boardSquareVisible[8] ? 'hide' : ''} />

                        </div>
                    </div>
                </div>

                <div className="buttons | grid hide-for-mobile ">
                    <button className='reset' onClick={() => {
                        reset()
                    }}>Reset</button>
                    <Link to={"/dictionary"}>
                        <button className='back'>Back</button>
                    </Link>
                </div>

            </div>

            <div className="player2-score | grid">
                <div className="player-and-0 | flex fx-ai-c fx-jc-c">
                    <h3 className='bold uppercase letter-spacing'>Player 2 </h3>
                    <img src={O} alt="" className='game-option' />
                </div>
                <div className="win | flex fx-ai-c fx-jc-sb">
                    <h4 className=' uppercase letter-spacing start'>Win</h4>
                    <h6 className=' bold uppercase letter-spacing end'>{player2Win}</h6>
                </div>
                <div className="loose | flex fx-ai-c fx-jc-sb">
                    <h4 className='  uppercase letter-spacing start'>Loose</h4>
                    <h6 className=' bold uppercase letter-spacing end'>{player2Loose}</h6>
                </div>
            </div>

            <div className="mobile-buttons |  hide-for-desktop ">
                    <button className='reset' onClick={() => {
                        reset()
                    }}>Reset</button>
                    <Link to={"/dictionary"}>
                        <button className='back'>Back</button>
                    </Link>
                </div>

        </div>
    )
}

export default Tic_Tac_Toe;