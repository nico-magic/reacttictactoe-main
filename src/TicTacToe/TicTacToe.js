import React, { useState, useEffect } from 'react';
import './TicTacToe.css';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const TicTacToe = () => {
    const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(49).fill(''));
    const [cellsHighlighted, setCellsHighlighted] = useState(Array(49).fill(false));
	const [winner, setWinner] = useState("");
    const [playerNamesToggles, setplayerNamesToggles] = useState(true)
    const [playerNamesToggles_red, setplayerNamesToggles_red] = useState(false)
    const [winningPattern, setwinningPattern] = useState([])
    
    useEffect(() => {
        let h = Array(49).fill(false);
        if(winner.length == 0){
        for (let index = 0; index < cellsHighlighted.length; index++) {
            if (cellsHighlighted[index]) {
                setTimeout(() => {
                    setCellsHighlighted(h);
                }, 2000);
            break;
            } 
        }} 
      }, [cellsHighlighted]);

    useEffect(() => {
        let h = Array(49).fill(false);

        console.log("h before: " + h);
        console.log("winner before = " + winningPattern);
        if (winningPattern.length != 0) {
            
        for (let index = 0; index < winningPattern.length; index++) {
            h[winningPattern[index]] = true;
        }
        setCellsHighlighted(h);
        console.log("h after: " + h);
        console.log("winner after = " + winningPattern);
        return;
        }
    }, [winningPattern]);

    useEffect(() => {
      if (winner === "x"){
        PlayerNameSwitch();
      } else if (winner === "o"){
        PlayerNameSwitch();
      }
    
      return;
    }, [winner])
    

    


    const PlayerNameSwitch = () => {
        playerNamesToggles ? setplayerNamesToggles(false) : setplayerNamesToggles(true);
        playerNamesToggles_red ? setplayerNamesToggles_red(false) : setplayerNamesToggles_red(true);
    }

    

    const highlightSwitch = (num) => {
        let h = Array(49).fill(false);
        h[num] = true;
        setCellsHighlighted(h);
        console.log(h[num]);
    }


    const checkForWinner = (squares) => {
        let combos = [
            //across: [
                [0,1,2,3,4,5,6],
                [7,8,9,10,11,12,13],
                [14,15,16,17,18,19,20],
                [21,22,23,24,25,26,27],
                [28,29,30,31,32,33,34],
                [35,36,37,38,39,40,41],
                [42,43,44,45,46,47,48],
            //down: 
                [0,7,14,21,28,35,42],
                [1,8,15,22,29,36,43],
                [2,9,16,23,30,37,44],
                [3,10,17,24,31,38,45],
                [4,11,18,25,32,39,46],
                [5,12,19,26,33,40,47],
                [6,13,20,27,34,41,48],

            //diagonal: 
                [0,8,16,24,32,40,48],
                [42,36,30,24,18,12,6],
        ];

        for (let combo in combos) {
			combos.forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' ||
					squares[pattern[3]] === '' ||
                    squares[pattern[4]] === '' ||
					squares[pattern[5]] === '' ||
                    squares[pattern[6]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]] &&
                    squares[pattern[2]] === squares[pattern[3]] &&
					squares[pattern[3]] === squares[pattern[4]] &&
                    squares[pattern[4]] === squares[pattern[5]] &&
					squares[pattern[5]] === squares[pattern[6]] 
				) {
                    console.log(winner)
					setWinner(squares[pattern[0]]);
                    console.log(pattern)
                    setwinningPattern(pattern);
				}
			});
		}
    

    };

    const handleClick = (num) => {

        if (!winner) {
            
        
            if (cells[num] !== ''){
                const nameConcat = "id_" + num;     
                highlightSwitch(num);
                return
            }


            let squares = [...cells];


            if (turn === 'x') {
                squares[num] = 'x';
                setTurn ('o');
                PlayerNameSwitch();


            }
            else {
                squares[num] = 'o';
                setTurn('x');

                PlayerNameSwitch();
            }
            
            checkForWinner(squares);
            setCells(squares);
        }
    }
    
    
    const Cell = ({ num, class_name }) => {
        return <td className= {cellsHighlighted[num] ? "highlighted" : "non-highlighted"} onClick={() => {handleClick(num);}} style={{ color: cells[num] === "x" ? "blue" : "red"}}>{cells[num]}</td>
    }


  return (
    

    <div className='TicTacToe'><div>
        <table cellspacing ="0" className='playerNames'>
            <tbody>
                <tr>
                    <td className={playerNamesToggles ? "classOn_blue " : "classOff_blue"}><EditText name="player_one" defaultValue = "Player 1"></EditText></td>
                    <td className={playerNamesToggles_red ? "classOn_red " : "classOff_red"}><EditText name="player_two" defaultValue = "Player 2"></EditText></td>
                </tr>
            </tbody>


        </table>
      </div><div className='container'>
              <table cellspacing="0">
                  <tbody>
                      <tr>
                          <Cell num={0} />
                          <Cell num={1} />
                          <Cell num={2} />
                          <Cell num={3} />
                          <Cell num={4} />
                          <Cell num={5} />
                          <Cell num={6} />
                      </tr>
                      <tr>
                          <Cell num={7}/>
                          <Cell num={8}/>
                          <Cell num={9}/>
                          <Cell num={10}/>
                          <Cell num={11}/>
                          <Cell num={12}/>
                          <Cell num={13}/>
                      </tr>
                      <tr>
                          <Cell num={14}/>
                          <Cell num={15}/>
                          <Cell num={16}/>
                          <Cell num={17}/>
                          <Cell num={18}/>
                          <Cell num={19}/>
                          <Cell num={20}/>
                      </tr>
                      <tr>
                          <Cell num={21}/>
                          <Cell num={22}/>
                          <Cell num={23} />
                          <Cell num={24}/>
                          <Cell num={25}/>
                          <Cell num={26}/>
                          <Cell num={27}/>
                      </tr>
                      <tr>
                          <Cell num={28}/>
                          <Cell num={29}/>
                          <Cell num={30}/>
                          <Cell num={31}/>
                          <Cell num={32}/>
                          <Cell num={33}/>
                          <Cell num={34}/>
                      </tr>
                      <tr>
                          <Cell num={35}/>
                          <Cell num={36}/>
                          <Cell num={37}/>
                          <Cell num={38}/>
                          <Cell num={39}/>
                          <Cell num={40}/>
                          <Cell num={41}/>
                      </tr>
                      <tr>
                          <Cell num={42}/>
                          <Cell num={43}/>
                          <Cell num={44}/>
                          <Cell num={45}/>
                          <Cell num={46}/>
                          <Cell num={47}/>
                          <Cell num={48}/>
                      </tr>
                  </tbody>
              </table>
          </div></div>
  )
}

export default TicTacToe
