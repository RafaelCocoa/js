while True:
    if input.button_is_pressed(Button.A):
        basic.show_number(10)
        basic.pause(100)
        basic.show_number(9)
        basic.pause(100)
        basic.show_number(8)
        basic.pause(100)
        basic.show_number(7)
        basic.pause(100)
        basic.show_number(6)
        basic.pause(100)
        basic.show_number(5)
        basic.pause(100)
        basic.show_number(4)
        basic.pause(100)
        basic.show_number(3)
        basic.pause(100)
        basic.show_number(2)
        basic.pause(100)
        basic.show_number(1)
        basic.pause(100)
        basic.show_number(0)
        music.play_tone(Note.C, music.beat(100))
        music.play_tone(Note.D, music.beat(100))
        music.play_tone(Note.E, music.beat(100))
        music.play_tone(Note.F, music.beat(100))
        music.play_tone(Note.G, music.beat(100))
        music.play_tone(Note.A, music.beat(100))
        music.play_tone(Note.B, music.beat(100))
        music.play_tone(Note.C5, music.beat(100))
        basic.plot_leds("""
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)
        basic.pause(1000)
        basic.plot_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)