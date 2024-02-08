import Draggable from "react-draggable";
import {useRef} from "react";

function CleaningUtensil(props) {
    let ref = useRef(null)
    return (
        <>
            <Draggable position={props.position} onStop={props.onDrag}>
                <div ref={ref}>
                    <img src={props.image} alt={"Dogbrush"} draggable={false}/>
                </div>
            </Draggable>
        </>
    )
}

export default CleaningUtensil