const createPoint = (position) =>{
    const point = document.createElement('div')
    point.classList.add("point", position)
    dice.append(point)
}

const createOnePoint = () =>{
    createPoint("center")
}

const createTwoPoint = () =>{
    createPoint("top-left")
    createPoint("bottom-right")
}

const createThreePoint = () =>{
    const positions = ["center", "top-left", "bottom-right"]
    positions.forEach(pos => createPoint(pos))
}

const createFourPoint = () =>{
    const positions = ["top-right", "top-left", "bottom-right", "bottom-left"]
    positions.forEach(pos => createPoint(pos))
}

const createFivePoint = () =>{
    const positions = ["center", "top-left", "bottom-right", "top-right", "bottom-left"]
    positions.forEach(pos => createPoint(pos))
}

const createSixPoint = () =>{
    const positions = ["top-left", "bottom-right" , "top-right", "bottom-left", "middle-right", "middle-left"]
    positions.forEach(pos => createPoint(pos))
}

export {
    createFivePoint,
    createFourPoint,
    createOnePoint,
    createPoint,
    createSixPoint,
    createThreePoint,
    createTwoPoint,
}