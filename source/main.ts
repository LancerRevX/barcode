var canvas = document.getElementById("canvas") as HTMLCanvasElement
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let lines = UpcA.encode('0', '1234567890')
console.log('0', '1234567890')
if (lines !== null) {
    let x = 0
    let colors = ['black', 'white']
    let color = true
    for (let line of lines) {
        ctx.fillStyle = colors[color ? 0 : 1]
        color = !color
        ctx.fillRect(x, 0, line, 1)
        x += line
    }
}