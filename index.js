console.log('hello world')

let count = 0
const counter = document.getElementById('counter')

function increase(){
    count ++
    counter.innerText = count
}

function decrease(){
    count --
    counter.innerText = count
}

function reset(){
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme){
    document.getElementsByTagName('body')[0].className = theme // always needs to be 0
    document.getElementsByTagName('main')[0].className = theme

    const buttons = document.getElementsByName('button')

    for( let i = 0; i < btns.length; i++){
        buttons[i].className = theme
    }
}
