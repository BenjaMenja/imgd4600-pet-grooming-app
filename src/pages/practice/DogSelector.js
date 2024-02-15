import {useEffect, useRef, useState} from "react";

function DogSelector(props) {
    const ref = useRef(null)
    const [issue, setIssue] = useState("")
    const [DogToShow, setDogToShow] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)
    const RandomDog = () => {
        let rand = Math.floor(Math.random() * props.Dogs.length)
        while (rand === DogToShow) {
            rand = Math.floor(Math.random() * props.Dogs.length)
        }
        setDogToShow(rand)
    }

    useEffect(() => {
        if (ref.current) {
            if (props.brushPosition.x > 0 && props.brushPosition.x < 500 && props.brushPosition.y > 100 && props.brushPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "brush") {
                    setCorrect(1)
                    setIssue("correct")
                    setTime(3)
                }
                else {
                    setCorrect(2)
                    setIssue(props.Dogs[DogToShow].props.requiredTool)
                }
            }
        }
    }, [props.brushPosition])

    useEffect(() => {
        if (ref.current) {
            if (props.toothbrushPosition.x > -250 && props.toothbrushPosition.x < 250 && props.toothbrushPosition.y > 100 && props.toothbrushPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "toothbrush") {
                    setCorrect(1)
                    setIssue("correct")
                    setTime(3)
                }
                else {
                    setCorrect(2)
                    setIssue(props.Dogs[DogToShow].props.requiredTool)
                }
            }
        }
    }, [props.toothbrushPosition])

    useEffect(() => {
        if (ref.current) {
            if (props.clipperPosition.x > -500 && props.clipperPosition.x < 0 && props.clipperPosition.y > 100 && props.clipperPosition.y < 600) {
                if (props.Dogs[DogToShow].props.requiredTool === "clipper") {
                    setCorrect(1)
                    setIssue("correct")
                    setTime(3)
                }
                else {
                    setCorrect(2)
                    setIssue(props.Dogs[DogToShow].props.requiredTool)
                }
            }
        }
    }, [props.clipperPosition])

    useEffect(() => {
        console.log("hi")
        if (time === 3) {
            console.log("Starting")
            intervalRef.current = setInterval(() => {
                if (time >= 0) {
                    setTime(prevTime => prevTime - 1)
                }
            }, 1000)
        }
        if (time === -1) {
            RandomDog()
            setIssue("")
            setCorrect(0)
            setTime(0)
            clearInterval(intervalRef.current)
        }
    }, [time])

    return (
        <div ref={ref} className={"dog-selector"}>
            <ExplanationDisplay issue={issue} time={time}/>
            {props.Dogs[DogToShow]}
            <GameStatus correct={correct} />
        </div>
    )
}

function GameStatus(props) {
    return (
        <div className={'game-status'}>
            {(props.correct === 0) && <div>
                <WhiteMark />
            </div>}
            {(props.correct === 1) && <div>
                <Checkmark />
                <p className={"correct"}>Correct!</p>
            </div>}
            {(props.correct === 2) && <div>
                <RedX />
                <p className={"incorrect"}>Incorrect!</p>
            </div>}
        </div>
    )
}

function ExplanationDisplay(props) {
    const [index, setIndex] = useState(0)
    const ref = useRef(null)
    const text = useRef(null)
    const explanations = {
        wrong_brush: [
            "This dog's hair looks a little long, doesn't it?",
            "This dog needs a good brushing..."
        ],
        wrong_toothbrush: [
            "Plaque buildup is a very common issue in these types of dogs.",
            "Regular dental care can help prevent common dental problems from occurring later down the road.",
            "This dog's mouth is wide open, ready for brushing!"
        ],
        wrong_clipper: [
            "Active dogs need their nails trimmed frequently to prevent movement issues.",
            "Overgrown nails can lead to discomfort in dog joints.",
            "This dog's nails haven't been trimmed in months!"
        ]
    }

    useEffect(() => {
        if (ref.current) {
            switch (props.issue) {
                case "brush":
                    setIndex(Math.floor(Math.random() * explanations.wrong_brush.length))
                    text.current = explanations.wrong_brush[index]
                    break
                case "toothbrush":
                    setIndex(Math.floor(Math.random() * explanations.wrong_toothbrush.length))
                    text.current = explanations.wrong_toothbrush[index]
                    break
                case "clipper":
                    setIndex(Math.floor(Math.random() * explanations.wrong_clipper.length))
                    text.current = explanations.wrong_clipper[index]
                    break
                case "correct":
                    break
                default:
                    text.current = ""
                    break
            }
        }
    }, [props.issue])
    return (
        <>
            <p ref={ref} className={'explanation'}>
                {props.issue === "brush" && explanations.wrong_brush[index]}
                {props.issue === "toothbrush" && explanations.wrong_toothbrush[index]}
                {props.issue === "clipper" && explanations.wrong_clipper[index]}
                {props.issue === "correct" && "Generating new dog in " + props.time + "..."}
            </p>
        </>
    )
}

function Checkmark() {
    return <svg width="10vw" height="10vw" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
        <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
    </svg>
}

function WhiteMark() {
    return <svg width="10vw" height="10vw" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
        <polygon fill="#F5F5DC" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
    </svg>
}

function RedX() {
    return <svg fill="#FF0000" height="10vw" width="10vw" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
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