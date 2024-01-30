import Draggable from "react-draggable";
import Dogbrush from "../../images/dog-brush.png"
import UICircle from "../../images/blue-ui-circle.png"
function Practice() {
    let dragFunction = function() {
        console.log('hi')
    }
    return (
        <>
            <Draggable onDrag={dragFunction} handle={".handle"} bounds={{left: -250, right: 250}}>
                <div className={"handle"}>
                    <img src={Dogbrush} alt={"Dogbrush"} draggable={false}/>
                </div>
            </Draggable>
            <p>this is text</p>
            <img src={UICircle} alt={"hmmm"} />
        </>
    )
}

export default Practice