joystickbit.initJoystickBit()
radio.setGroup(32)
basic.showString("T")
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 10) {
        radio.setGroup(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 1010) {
        radio.setGroup(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 10) {
        radio.setGroup(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 1010) {
        radio.setGroup(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.setGroup(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.setGroup(6)
    } else {
        radio.setGroup(0)
    }
})
