makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showString("R")
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showString("L")
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showString("D")
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showString("U")
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    basic.clearScreen()
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    Tinybit.Music_Car(Tinybit.enMusic.birthday)
})
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P0)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
