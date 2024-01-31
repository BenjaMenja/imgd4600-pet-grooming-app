
import UICircle from "../../images/blue-ui-circle-128.png"
import {useEffect, useState} from "react";
import Brush from "./Brush";
import {Col, Row} from "reactstrap";
function Practice() {
    let [brushPosition, setBrushPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        console.log(brushPosition)
    }, [brushPosition])

    return (
        <>
            <Row xs={'5'}>
                <Col />
                <Col>
                    <img src={UICircle} alt={"hmmm"} />
                </Col>
            </Row>
            <Brush position={brushPosition} setPosition={setBrushPosition} />
        </>
    )
}

export default Practice