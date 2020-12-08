input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showIcon(IconNames.Happy)
let score = 0
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Half))
        score += 1
        basic.showNumber(score)
    }
    if (input.buttonIsPressed(Button.A)) {
        if (score < 3) {
            music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        } else {
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        }
    }
})
