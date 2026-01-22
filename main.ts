input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("G E E F D D C D ", 199), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E F G G G G E E ", 199), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F D D C E G G C ", 199), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    music.setTempo(20)
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
