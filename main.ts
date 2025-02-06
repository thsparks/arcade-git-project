controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C D E F E F G A ", 120), music.PlaybackMode.UntilDone)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . 3 . . . . . . 
    . . . . . . . 3 . 3 . . . . . . 
    . . . . . . . 3 . 3 . . . . . . 
    . . . . . . . 3 . 3 . . 3 . . . 
    . . . . . . . . . . . . 3 . . . 
    . . . 3 . . . . . . . . 3 . . . 
    . . . 3 . . . . . . . . 3 . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 3 . . . . . . 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
