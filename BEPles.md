```package
Bouw je BEP=github:bouw-je-bep/bouw-je-bep
```

# Bouw je BEP

## Daar gaan we! @unplugged

In de volgende stappen gaan we aan de slag met programmeren. Lees alle stappen goed door. Je kunt op het lamp icoon klikken als je meer informatie nodig hebt.

Let's go! 
![BEP figuur](HYPERLINK NAAR AFBEELDING ONLINE)

## Geef BEP een hart! @fullscreen

Sleep de ``||basic:show leds||`` (toon lichtjes) blok in de ``||basic:forever||`` (de hele tijd) blok en teken een hart!

![An animation that shows how to drag a block and paint a heart](/static/mb/projects/flashing-heart/showleds.gif)

## Geef BEP een naam! @showhint

Sleep nu uit Basis het blokje ``||basic.showString||`` (toon tekens). Je kan hier de naam van jouw BEP in typen.

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
    basic.showString("BEP");
})
```

## Controleer je code!

Als het goed is zie je nu links bij de virtuele @boardname@, BEP's hart en naam voorbij komen.

## De code naar BEP sturen

Je code werkt niet gelijk op de BEP. Daarvoor moeten we hem eerst aansluiten en downloaden. 
Sluit met de USB kabel de @boardname@ aan op je chromebook, klik daarna op ``|Download|`` om jouw code naar BEP te sturen!

![Heart shape in the LEDs](/static/mb/projects/flashing-heart/sim.gif)

## Gelukt!

Als het downloaden is gelukt zie je ook het hart en BEP's naam op de echte @boardname@ verschijnen!

Gefeliciteerd je eerste programmeer les is gelukt! Laten we nu de BEP laten bewegen!

![Heart shape in the LEDs](/static/mb/projects/flashing-heart/sim.gif)

```package
Bouw je BEP=github:bouw-je-bep/bouw-je-bep#v1.0.14
```

# Lampje in BEP 

## BEP's discolamp @unplugged
Zoals je al hebt kunnen zien heeft BEP een cool discolampje op het extensiebord.
In de volgende stappen leer ik je verschillende kleuren licht te programmeren! 

![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2020/10/BEP2-1024x1024.png)


## stap 1 @fullscreen

Sleep links uit ``|BEP:Bouw je BEP|`` het blokje ``||bep:setLedColor||``  
en plaats hem in de ``||basic:bij opstarten||`` blok en kies je favoriete kleur!

```blocks
BEP.setLedColor(0xFF0000)
})
```
