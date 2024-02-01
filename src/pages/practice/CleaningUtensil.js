import Draggable from "react-draggable";
import {useEffect, useRef} from "react";

function CleaningUtensil(props) {
    let ref = useRef(null)
    let dragFunction = function() {
        let rect = ref.current.getBoundingClientRect();
        props.setPosition({ x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2)})
    }
    return (
        <>
            <Draggable defaultPosition={props.startPos} onStop={dragFunction} /*bounds={{left: -window.innerWidth / 4, right: window.innerWidth / 4}} */ >
                <div ref={ref}>
                    <img src={props.image} alt={"Dogbrush"} draggable={false}/>
                </div>
            </Draggable>
        </>
    )
}

export default CleaningUtensil