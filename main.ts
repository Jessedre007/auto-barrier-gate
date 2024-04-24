makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
rekabit.setServoPosition(ServoChannel.S1, 90)
rekabit.setRgbBrightness(200)
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        rekabit.setServoPosition(ServoChannel.S1, 20)
        rekabit.setAllRgbPixelsColor(0x00ffff)
        basic.pause(5000)
    } else {
        rekabit.setServoPosition(ServoChannel.S1, 90)
        rekabit.setAllRgbPixelsColor(0xff0000)
    }
})
