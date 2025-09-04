input.onButtonPressed(Button.A, function () {
    derajat += -10
})
input.onButtonPressed(Button.B, function () {
    derajat += 10
})
let derajat = 0
basic.forever(function () {
    if (derajat > 179) {
        derajat = 180
    }
    if (derajat < 1) {
        derajat = 0
    }
    basic.showNumber(derajat)
    servos.P0.setAngle(derajat)
})
