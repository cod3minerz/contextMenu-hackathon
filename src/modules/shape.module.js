import {Module} from '../core/module'
import {getRandom} from '../utils'
import {getRandomColor} from '../utils'

export class ShapeModule extends Module {
    constructor(){
        super("randomShape", "Случайная фигура")
    }

    trigger(){
        //1
        const createCircle = (size) =>{
        const circle = document.createElement("div")
        circle.style.position = 'absolute'
        const x = Math.floor(Math.random() * (window.innerWidth - size))
        const y = Math.floor(Math.random() * (window.innerHeight - size))
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`
        circle.dataset.shape = "shape"
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.background = getRandomColor()
        circle.style.borderRadius = "50%"
        return circle
        }

        //2
        const createSquare = (size) =>{
        const square = document.createElement("div")
        square.style.position = 'absolute'
        const x = Math.floor(Math.random() * (window.innerWidth - size))
        const y = Math.floor(Math.random() * (window.innerHeight - size))
        square.style.left = `${x}px`
        square.style.top = `${y}px`
        square.dataset.shape = "shape"
        square.style.width = `${size}px`
        square.style.height = `${size}px`
        square.style.background = getRandomColor()
        return square
        }

        //3
        const createTriangle = (size) =>{
        const triangle = document.createElement("div")
        triangle.style.position = 'absolute'
        const x = Math.floor(Math.random() * (window.innerWidth - size))
        const y = Math.floor(Math.random() * (window.innerHeight - size))
        triangle.style.left = `${x}px`
        triangle.style.top = `${y}px`
        triangle.dataset.shape = "shape"
        triangle.style.width = "0"
        triangle.style.height = "0"
        triangle.style.borderLeft = `${size}px solid transparent`
        triangle.style.borderRight = `${size}px solid transparent`
        triangle.style.borderBottom = `${size*2}px solid ${getRandomColor()}`
        return triangle
        }

        //4
        const createTrapeze = (size) =>{
        const trapeze = document.createElement("div")
        trapeze.style.position = 'absolute'
        const x = Math.floor(Math.random() * (window.innerWidth - size))
        const y = Math.floor(Math.random() * (window.innerHeight - size))
        trapeze.style.left = `${x}px`
        trapeze.style.top = `${y}px`
        trapeze.dataset.shape = "shape"
        trapeze.style.width = `${size*2}px`
        trapeze.style.height = "0"
        trapeze.style.borderLeft = `${size}px solid transparent`
        trapeze.style.borderRight = `${size}px solid transparent`
        trapeze.style.borderBottom = `${size*2}px solid ${getRandomColor()}`
        return trapeze
        }

        //5
        const createParallelogram = (size) =>{
        const parallelogram = document.createElement("div")
        parallelogram.style.position = 'absolute'
        const x = Math.floor(Math.random() * (window.innerWidth - size))
        const y = Math.floor(Math.random() * (window.innerHeight - size))
        parallelogram.style.left = `${x}px`
        parallelogram.style.top = `${y}px`
        parallelogram.dataset.shape = "shape"
        parallelogram.style.width = `${size*3}px`
        parallelogram.style.height = `${size*2}px`
        parallelogram.style.marginLeft = `${size/2}px`
        parallelogram.style.transform = "skew(20deg)"
        parallelogram.style.background = getRandomColor()
        return parallelogram
        }
        
        if(document.querySelector('[data-shape]')){
            document.querySelector('[data-shape]').remove()
        }
        switch (getRandom(1, 5)){
        case 1:
            document.body.append(createCircle(getRandom(10, 500)))
            break;
        case 2:
            document.body.append(createSquare(getRandom(10, 500)))
            break;
        case 3:
            document.body.append(createTriangle(getRandom(10,200)))
            break;
        case 4:
            document.body.append(createTrapeze(getRandom(10,200)))
            break;
        case 5:
            document.body.append(createParallelogram(getRandom(10,200)))
            break;

            
        default:
            console.log("нет фигуры")
        }
    }
}