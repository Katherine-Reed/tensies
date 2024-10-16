export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#ff00ff" : "#663399"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}