import Box from "../Box/Box"
import "./Board.css"

const Board = ({board,onClick}) => {
  return (
    <div className="board"> 
        {board.map((value, id) =>{
            return <Box value={value} onClick={() => value === null && onClick(id)} />    
        })}
     </div>
  )
}

export default Board