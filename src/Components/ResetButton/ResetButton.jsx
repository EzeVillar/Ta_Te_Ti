import "./ResetButton.css"

const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-button" onClick={resetBoard}>¿Play again?</button>
  )
}

export default ResetButton