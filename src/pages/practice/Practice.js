import UICircle from "../../images/blue-ui-circle-128.png"
import Dogbrush from "../../images/dog-brush-scaled.png"
import Toothbrush from "../../images/toothbrush-scaled.png"
import Clipper from "../../images/clippers-scaled-2.png"
import GoldenRetrieverTeeth from "../../images/dogs/golden-retriever.png";
import GoldenRetrieverTeeth2 from "../../images/dogs/Golden-Retriever-Teeth.png"
import ShihTzuLongHair from "../../images/dogs/shih-tzu-long-hair.png";
import ShihTzuLongHair2 from "../../images/dogs/shih-tzu-long-hair-2.png";
import DobermannNails from "../../images/dogs/dobermann-nails.jpg"
import GoldenRetrieverNails from "../../images/dogs/golden-retriever-nails.jpg"
import GoldenRetrieverLongHair from "../../images/dogs/golden-retriever-long-hair.png"
import {useEffect, useRef, useState} from "react";
import CleaningUtensil from "./CleaningUtensil";
import {Link} from "react-router-dom";
import DogSelector from "./DogSelector";
import Dog from "./Dog";
import {getTasksForToday} from "../../TaskList";

function Practice() {
    const cleanTaskList = () => {
        const taskarr = tasklist?.split(" ")
        let counter = 0
        taskarr?.forEach(task => {
            if (!task.includes("_")) {
                counter += Math.floor((Math.random() * 3) + 2)
            }
        })
        console.log(counter)
        return counter
    }

    const [brushPosition, setBrushPosition] = useState({x: 0, y: 0})
    const [toothbrushPosition, setToothbrushPosition] = useState({x: 0, y: 0})
    const [clipperPosition, setClipperPosition] = useState({x: 0, y: 0})

    const brushcircle = useRef(null)
    const [brushCircleCenter, setBrushCircleCenter] = useState({x: 0, y: 0})
    const toothbrushcircle = useRef(null)
    const [toothbrushCircleCenter, setToothbrushCircleCenter] = useState({x: 0, y: 0})
    const clippercircle = useRef(null)
    const [clipperCircleCenter, setClipperCircleCenter] = useState({x: 0, y: 0})

    console.log(getTasksForToday())
    const [tasklist, setTasklist] = useState(getTasksForToday())
    const [practiceCount, setPracticeCount] = useState(cleanTaskList())

    const Dogs = [
        <Dog image={GoldenRetrieverTeeth} requiredTool={"brush"} breed={"golden_retriever"}/>,
        <Dog image={ShihTzuLongHair} requiredTool={"wash"} breed={"shih_tzu"}/>,
        <Dog image={ShihTzuLongHair2} requiredTool={"wash"} breed={"shih_tzu"}/>,
        <Dog image={GoldenRetrieverTeeth2} requiredTool={"brush"} breed={"golden_retriever"}/>,
        <Dog image={DobermannNails} requiredTool={"clip"} breed={"dobermann"}/>,
        <Dog image={GoldenRetrieverNails} requiredTool={"clip"} breed={"golden_retriever"} />,
        <Dog image={GoldenRetrieverLongHair} requiredTool={"wash"} breed={"golden_retriever"} />
    ]

    useEffect(() => {
        const getBrushCircleCenter = () => {
            if (brushcircle.current) {
                const rect = brushcircle.current.getBoundingClientRect()
                setBrushCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
                setBrushPosition({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        const getToothbrushCircleCenter = () => {
            if (toothbrushcircle.current) {
                const rect = toothbrushcircle.current.getBoundingClientRect()
                setToothbrushCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
                setToothbrushPosition({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        const getClipperCircleCenter = () => {
            if (clippercircle.current) {
                const rect = clippercircle.current.getBoundingClientRect()
                setClipperCircleCenter({x: 0, y: -(rect.top + (rect.height / 2))})
                setClipperPosition({x: 0, y: -(rect.top + (rect.height / 2))})
            }
        }

        getBrushCircleCenter()
        getToothbrushCircleCenter()
        getClipperCircleCenter()
    }, [])

    const handleBrushDrag = (e, pos) => {
        const {x, y} = pos;
        const distance = Math.sqrt(Math.pow((x - brushCircleCenter.x), 2) + Math.pow((y - brushCircleCenter.y), 2))

        if (distance <= 128) {
            setBrushPosition({x: brushCircleCenter.x, y: brushCircleCenter.y})
        }
        else {
            setBrushPosition({x: x + brushCircleCenter.x, y})
        }
    }

    const handleToothbrushDrag = (e, pos) => {
        const {x, y} = pos;
        const distance = Math.sqrt(Math.pow((x - toothbrushCircleCenter.x), 2) + Math.pow((y - toothbrushCircleCenter.y), 2))

        if (distance <= 128) {
            setToothbrushPosition({x: toothbrushCircleCenter.x, y: toothbrushCircleCenter.y})
        }
        else {
            setToothbrushPosition({x, y})
        }
    }

    const handleClipperDrag = (e, pos) => {
        const {x, y} = pos;
        const distance = Math.sqrt(Math.pow((x - clipperCircleCenter.x), 2) + Math.pow((y - clipperCircleCenter.y), 2))

        if (distance <= 128) {
            setClipperPosition({x: clipperCircleCenter.x, y: clipperCircleCenter.y})
        }
        else {
            setClipperPosition({x, y})
        }
    }

    return (
        <>
            {practiceCount > 0 ? <>
                <h1>Cleaning Time!</h1>
                <div className={'practice'}>
                    <div className={'top-items'}>
                        <Link className="nav-button" to="/">
                            Back to Home
                        </Link>
                        <div>
                            <img ref={brushcircle} src={UICircle} alt={"hmmm"} />
                            <CleaningUtensil position={brushPosition} onDrag={handleBrushDrag} image={Dogbrush}/>
                        </div>
                        <div>
                            <img ref={toothbrushcircle} src={UICircle} alt={"hmmm"} />
                            <CleaningUtensil position={toothbrushPosition} onDrag={handleToothbrushDrag} image={Toothbrush}/>
                        </div>

                        <div>
                            <img ref={clippercircle} src={UICircle} alt={"hmmm"} />
                            <CleaningUtensil position={clipperPosition} onDrag={handleClipperDrag} image={Clipper}/>
                        </div>
                        <div />
                    </div>
                    <DogSelector Dogs={Dogs} brushPosition={brushPosition} toothbrushPosition={toothbrushPosition} clipperPosition={clipperPosition} setPracticeCount={setPracticeCount}/>
                </div>
            </> : <div className={"practice"}>
                <h1>Cleaning Time!</h1>
                <h2>Hooray! You are done!</h2>
                <h3>Your dog is waiting for you! It's time to take care of your dog, in real life!</h3>
                <p>Remember to check off your tasks in the calendar tab!</p>
                <div className={"task-complete"}>
                    <Link to={"/"} className={"nav-button"}>
                        To Homepage
                    </Link>
                    <Link to={"/schedule"} className={"nav-button"}>
                        To Calendar
                    </Link>
                </div>
            </div>}
        </>
    )
}

export default Practice