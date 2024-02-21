function Dog(props) {

    return (
        <>
            <img className={'dog-image'} src={props.image} alt={"Dog"} draggable={false} />
        </>
    )
}

export default Dog