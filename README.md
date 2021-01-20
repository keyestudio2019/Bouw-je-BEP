> Open this page at [Bouw je BEP extension](https://bouw-je-bep.github.io/Bouw-je-BEP/)

# Bouw je BEP blocks for micro:bit
With [Bouw je BEP](https://bouwjebep.nl) (Build your BEP) we aim to make technology more accessible, fun and personal for all children and teachers. BEP stands for build emote and play. It combines technology with emotion and provides a base for anyone to create their own unique character. BEP stimulates the creativity of children and the growth of technical skills. We understand technology and coding can be very intimidating, that's why we designed BEP to be approachable to be used and teach! 

This extension uses the [4tronix ServoBit](https://4tronix.co.uk/servobit) with a PCA9685 to control a Bouw je BEP (https://bouwjebep.nl/onze-leskisten) robot kit with 5 independent servos and a LED. Helper commands are available to set individual servos to 3 differant degrees to program BEP's expressions or emotion.

## Use as Extension
This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **Bouw je BEP** and import

## Edit this project ![Build status badge](https://github.com/bouw-je-bep/bouw-je-bep/workflows/MakeCode/badge.svg)
To edit this repository in MakeCode.

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
