var canvas = document.getElementById("canvas") as HTMLCanvasElement
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let inputs = document.getElementsByTagName('input')
for (let i = 0; i < 11; i++) {
    inputs[i].onchange = draw_lines
}

function draw_lines() {
    let numbers = ''
    for (let i = 1; i < 11; i++) {
        numbers = numbers.concat(inputs[i].value)
    }
    let code = UpcA.encode(
        inputs[0].value,
        numbers
    )
    if (code !== null) {
        let lines = code[0]
        let x = 0
        let colors = ['black', 'white']
        let color = true
        for (let line of lines) {
            ctx.fillStyle = colors[color ? 0 : 1]
            color = !color
            ctx.fillRect(x, 0, line, 1)
            x += line
        }

        inputs[11].value = code[1].toString()
    } else {
        alert('Error')
    }
}
draw_lines()