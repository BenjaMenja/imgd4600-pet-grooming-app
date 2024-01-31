import Draggable from "react-draggable";
import Dogbrush from "../../images/dog-brush.png";
import {useRef} from "react";

function Brush(props) {
    let ref = useRef(null)
    let dragFunction = function() {
        let rect = ref.current.getBoundingClientRect();
        props.setPosition({ x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2)})
    }

    return (
        <>
            <Draggable onDrag={dragFunction} handle={".handle"} bounds={{left: -250, right: 250}}>
                <div className={"handle"} ref={ref}>
                    <img src={Dogbrush} alt={"Dogbrush"} draggable={false} style={{scale: '50%'}}/>
                </div>
            </Draggable>
        </>
    )
}

export default Brush