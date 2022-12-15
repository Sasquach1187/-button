input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (pass == entry) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(2)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    basic.clearScreen()
    entry = ""
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "B"
})
let entry = ""
let pass = ""
basic.showIcon(IconNames.Angry)
pass = "AABAA"
entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(255)
basic.forever(function () {
	
})
