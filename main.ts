input.onButtonPressed(Button.A, function () {
    Counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Counter))
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
})
let Counter = 0
Counter = 4
