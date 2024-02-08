import {Button} from "reactstrap";
import {useEffect, useRef, useState} from "react";

function DogSelector(props) {
    const ref = useRef(null)
    const [DogToShow, setDogToShow] = useState(0)
    const [correct, setCorrect] = useState(0)
    const RandomDog = () => {
        const rand = Math.floor(Math.random() * props.Dogs.length)
        setDogToShow(rand)
    }

    useEffect(() => {
        if (ref.current) {
            if (props.brushPosition.x > 0 && props.brushPosition.x < 500 && props.brushPosition.y > 100 && props.brushPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "brush") {
                    setCorrect(1)
                }
                else {
                    setCorrect(2)
                }
            }
        }
    }, [props.brushPosition])

    useEffect(() => {
        if (ref.current) {
            if (props.toothbrushPosition.x > -250 && props.toothbrushPosition.x < 250 && props.toothbrushPosition.y > 100 && props.toothbrushPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "toothbrush") {
                    setCorrect(1)
                }
                else {
                    setCorrect(2)
                }
            }
        }
    }, [props.toothbrushPosition])

    useEffect(() => {
        if (ref.current) {
            if (props.clipperPosition.x > -500 && props.clipperPosition.x < 0 && props.clipperPosition.y > 100 && props.clipperPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "clipper") {
                    setCorrect(1)
                }
                else {
                    setCorrect(2)
                }
            }
        }
    }, [props.clipperPosition])

    return (
        <div ref={ref} className={"dog-selector"}>
            <Button color={'primary'} onClick={RandomDog} className={"button"}>
                Change Dog
            </Button>
            {props.Dogs[DogToShow]}
            <GameStatus correct={correct} />
        </div>
    )
}

function GameStatus(props) {
    return (
        <>
            {(props.correct === 1) && <div>
                <Checkmark />
                <p className={"correct"}>Correct!</p>
            </div>}
            {(props.correct === 2) && <div>
                <RedX />
                <p className={"incorrect"}>Incorrect!</p>
            </div>}
        </>
    )
}

function Checkmark() {
    return <svg width="200px" height="200px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
        <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
    </svg>
}

function RedX() {
    return <svg fill="#FF0000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 460.775 460.775">
<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
</svg>
}



export default DogSelector