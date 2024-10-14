export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#ff00ff" : "#663399"
    }
    return (
        <article
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2>{props.value}</h2>
        </article>
    )
}