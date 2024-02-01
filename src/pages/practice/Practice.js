import GoldenRetriever from "../../images/golden-retriever.png"
import UICircle from "../../images/blue-ui-circle-128.png"
import Dogbrush from "../../images/dog-brush-scaled.png"
import Toothbrush from "../../images/toothbrush-scaled.png"
import Clipper from "../../images/clippers-scaled-2.png"
import {useEffect, useRef, useState} from "react";
import CleaningUtensil from "./CleaningUtensil";
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
function Practice() {
    const [brushPosition, setBrushPosition] = useState({x: 0, y: 0})
    const [toothbrushPosition, setToothbrushPosition] = useState({x: 0, y: 0})
    const [clipperPosition, setClipperPosition] = useState({x: 0, y: 0})

    const brushcircle = useRef(null)
    const [brushCircleCenter, setBrushCircleCenter] = useState({x: 0, y: 0})
    const toothbrushcircle = useRef(null)
    const [toothbrushCircleCenter, setToothbrushCircleCenter] = useState({x: 0, y: 0})
    const clippercircle = useRef(null)
    const [clipperCircleCenter, setClipperCircleCenter] = useState({x: 0, y: 0})

    useEffect(() => {
        const getBrushCircleCenter = () => {
            if (brushcircle.current) {
                const rect = brushcircle.current.getBoundingClientRect()
                setBrushCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        const getToothbrushCircleCenter = () => {
            if (toothbrushcircle.current) {
                const rect = toothbrushcircle.current.getBoundingClientRect()
                setToothbrushCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        const getClipperCircleCenter = () => {
            if (clippercircle.current) {
                const rect = clippercircle.current.getBoundingClientRect()
                setClipperCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        getBrushCircleCenter()
        getToothbrushCircleCenter()
        getClipperCircleCenter()
    }, [])


    return (
        <>
            <h1>Cleaning Time!</h1>
            <Row xs={'5'} style={{width: "100%"}}>
                <Col>
                    <Link className="nav-button" to="/">
                        Back to Home
                    </Link>
                </Col>
                <Col>
                    <img ref={brushcircle} src={UICircle} alt={"hmmm"} />
                    {brushcircle.current && (<CleaningUtensil setPosition={setBrushPosition} image={Dogbrush} startPos={brushCircleCenter}/>)}
                </Col>
                <Col>
                    <img ref={toothbrushcircle} src={UICircle} alt={"hmmm"} />
                    {toothbrushcircle.current && (<CleaningUtensil setPosition={setToothbrushPosition} image={Toothbrush} startPos={toothbrushCircleCenter}/>)}
                </Col>
                <Col>
                    <img ref={clippercircle} src={UICircle} alt={"hmmm"} />
                    {clippercircle.current && (<CleaningUtensil setPosition={setClipperPosition} image={Clipper} startPos={clipperCircleCenter}/>)}
                </Col>
            </Row>
            <img src={GoldenRetriever} alt={"Golden Retriever"} />
        </>
    )
}

export default Practice