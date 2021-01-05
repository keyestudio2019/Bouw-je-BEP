> Open this page at [Bouw je BEP extension](https://bouw-je-bep.github.io/Bouw-je-BEP/)

# Bouw je BEP blocks for micro:bit
This extension uses the [4tronix ServoBit](https://4tronix.co.uk/servobit) with a PCA9685 to control a Bouw je BEP (https://bouwjebep.nl/onze-leskisten) robot kit with 5 independent servos. Helper commands are available to set individual servos to 3 differant degrees to program BEP's expressions or emotion.

## Use as Extension
This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/bouw-je-bep/bouw-je-bep** and import

## Edit this project ![Build status badge](https://github.com/bouw-je-bep/bouw-je-bep/workflows/MakeCode/badge.svg)
To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/bouw-je-bep/bouw-je-bep** and click import

## BEP Servomotors #BEP.servoWrite
How to move parts of BEP:

```blocks
BEP.servoWrite(BEP.Servos.Rechteroog, 1)
BEP.servoWrite(BEP.Servos.Linkeroog, 1)
BEP.servoWrite(BEP.Servos.Geletandwiel, 1)
BEP.servoWrite(BEP.Servos.Rechtwenkbrauw, 1)
BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
```
Change the numbers and hit download.

## FireLED #LED
The 4tronix ServoBit has a single FireLed fitted to act as a status indicator.
This library defines some helpers for using it.
The LED is automatically updated after every setting

![](http://4tronix.co.uk/servobit/clearLed.jpg)

![](http://4tronix.co.uk/servobit/setLed.jpg)

![](http://4tronix.co.uk/servobit/setBrightness.jpg)

![](http://4tronix.co.uk/servobit/startFlash.jpg)

![](http://4tronix.co.uk/servobit/stopFlash.jpg)


```blocks
// Clear LED
ServoBit.ledClear();

// Set LED to Red
ServoBit.setLedColor(ServoBit.vColours(vColors.Red));

// Set brightness of LED
ServoBit.ledBrightness(40);

// Start Flashing the LED with Green
ServoBit.startFlash(ServoBit.vColours(vColors.Green), 100);

// Stop flashing the LED
ServoBit.stopFlash();
```
## License

MIT 

#### Metadata (used for search, rendering)

* for PXT/microbit
