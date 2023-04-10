import '../../../index.css'
import './Stone-Paper-Scissor.css'
import Stone from '../../../image/stone.png'
import Scissor from '../../../image/scissor.png'
import Papper from '../../../image/papper.png'
import { useState } from 'react'

function StonePaperScissor() {
    let [win, setWin] = useState(0);
    let [draw, setDraw] = useState(0);
    let [loose, setLoose] = useState(0);
    let [opponentOption, setOpponentOption] = useState(0);
    let [yourOption, setYourOption] = useState(0);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const randomInteger = ((min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })

    const onReset = (() => {
        setWin(0);
        setDraw(0);
        setLoose(0);
        setYourOption(0);
        setOpponentOption(0);
    });

    const onYourOption = ((option) => {
        setYourOption(option);
    })

    const decideWinner = ((option1, option2) => {
        if (option1 === 1) {
            if (option2 === 1) {
                setDraw(draw + 1)
            }
            else if (option2 === 2) {
                setLoose(loose + 1)
            }
            else {
                setWin(win + 1)
            }
        }
        else if (option1 === 2) {
            if (option2 === 1) {
                setWin(win + 1)
            }
            else if (option2 === 2) {
                setDraw(draw + 1)
            }
            else {
                setLoose(loose + 1)
            }
        }
        else {
            if (option2 === 1) {
                setLoose(loose + 1)

            }
            else if (option2 === 2) {
                setWin(win + 1)

            }
            else {
                setDraw(draw + 1)
            }
        }
    })

    return (
        <div className="stone-paper-scissor | bg-clr-500 flex fx-ai-c fx-jc-sb">
            <div className="game">
                <div className="opponent">
                    <h3 className='txt-clr-500 bold uppercase letter-spacing'>Oponent chossed</h3>
                    <div className="opponent-options | flex flex fx-ai-c fx-jc-sb">
                        <img src={Stone} alt="" className={`${opponentOption === 1 ? 'selected-game' : 'unselected-game'}`} />
                        <img src={Papper} alt="" className={`${opponentOption === 2 ? 'selected-game' : 'unselected-game'}`} />
                        <img src={Scissor} alt="" className={`${opponentOption === 3 ? 'selected-game' : 'unselected-game'}`} />
                    </div>
                </div>

                <div className="you">
                    <div className="you-options | flex fx-ai-c fx-jc-sb">
                        <img src={Stone} alt="" className={`${yourOption === 1 ? 'selected-game' : 'unselected-game'}`} onClick={() => {
                            onYourOption(1)
                            let opponentOption = randomInteger(1, 3);
                            delay(3000);
                            setOpponentOption(opponentOption);
                            decideWinner(1, opponentOption);
                        }} />
                        <img src={Papper} alt="" className={`${yourOption === 2 ? 'selected-game' : 'unselected-game'}`} onClick={() => {
                            onYourOption(2)
                            let opponentOption = randomInteger(1, 3);
                            delay(3000);
                            setOpponentOption(opponentOption);
                            decideWinner(2, opponentOption);


                        }} />
                        <img src={Scissor} alt="" className={`${yourOption === 3 ? 'selected-game' : 'unselected-game'}`} onClick={() => {
                            onYourOption(3)
                            let opponentOption = randomInteger(1, 3);
                            delay(3000);
                            setOpponentOption(opponentOption);
                            decideWinner(3, opponentOption);

                        }} />
                    </div>
                    <h3 className='txt-clr-500 bold uppercase letter-spacing'>You choosed</h3>
                </div>

            </div>
            <div className="score | grid ">
                <div className="win | flex fx-ai-c fx-jc-sb">
                    <h4 className='txt-clr-500 bold uppercase letter-spacing start'>Win</h4>
                    <h6 className='txt-clr-500 bold uppercase letter-spacing end'>{win}</h6>
                </div>
                <div className="draw | flex fx-ai-c fx-jc-sb">
                    <h4 className='txt-clr-500 bold uppercase letter-spacing start'>Draw</h4>
                    <h6 className='txt-clr-500 bold uppercase letter-spacing end'>{draw}</h6>
                </div>
                <div className="loose | flex fx-ai-c fx-jc-sb">
                    <h4 className='txt-clr-500 bold uppercase letter-spacing start'>Loose</h4>
                    <h6 className='txt-clr-500 bold uppercase letter-spacing end'>{loose}</h6>
                </div>
                <button className='reset' onClick={onReset}>Reset</button>
                <button className='back'>Back</button>
            </div>
        </div>
    )
}

export default StonePaperScissor;