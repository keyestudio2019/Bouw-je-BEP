### @hideIteration true

# Downloaden

## Step 1
1. Wanneer je de micro:bit hebt aangesloten en gekoppeld hebt mag je op ``|Downloaden|`` klikken.
2. Als dit is gelukt ontstaat er een klein hartje op het micro:bit schermpje en gaat de discolicht knipperen.
3. **Nu mag je BEP verder opruimen en terug naar LessonUp!**
![Koppelen van de microbit](https://s4.gifyu.com/images/BEP-microbit-koppelen-2.gif)
```template
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    BEP.servoWrite(BEP.Servos.Linkeroog, 0)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 2)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 0)
    BEP.startFlash(0xFF0000, 100)
    basic.pause(1000)
    BEP.ledClear()
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    BEP.servoWrite(BEP.Servos.Rechteroog, 1)
    BEP.servoWrite(BEP.Servos.Linkeroog, 1)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 1)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 1)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
    BEP.startFlash(0x00FF00, 100)
    basic.pause(1000)
    BEP.ledClear()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 2)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 2)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 0)
    BEP.startFlash(0x0000FF, 100)
    basic.pause(1000)
    BEP.ledClear()
    basic.showIcon(IconNames.SmallHeart)
    BEP.servoWrite(BEP.Servos.Rechteroog, 1)
    BEP.servoWrite(BEP.Servos.Linkeroog, 1)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 0)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 2)
    BEP.startFlash(0xFF00FF, 100)
    basic.pause(1000)
    BEP.ledClear()
}
```