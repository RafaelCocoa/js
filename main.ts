while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(10)
        basic.pause(100)
        basic.showNumber(9)
        basic.pause(100)
        basic.showNumber(8)
        basic.pause(100)
        basic.showNumber(7)
        basic.pause(100)
        basic.showNumber(6)
        basic.pause(100)
        basic.showNumber(5)
        basic.pause(100)
        basic.showNumber(4)
        basic.pause(100)
        basic.showNumber(3)
        basic.pause(100)
        basic.showNumber(2)
        basic.pause(100)
        basic.showNumber(1)
        basic.pause(100)
        basic.showNumber(0)
        music.playTone(Note.C, music.beat(100))
        music.playTone(Note.D, music.beat(100))
        music.playTone(Note.E, music.beat(100))
        music.playTone(Note.F, music.beat(100))
        music.playTone(Note.G, music.beat(100))
        music.playTone(Note.A, music.beat(100))
        music.playTone(Note.B, music.beat(100))
        music.playTone(Note.C5, music.beat(100))
        basic.plotLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
        basic.pause(1000)
        basic.plotLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    }
    
}
