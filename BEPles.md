### @activities 1

## 1. BEP tot leven brengen

# BEP tot leven brengen!
### Daar gaan we! @unplugged

In de deze les gaan we aan de slag met programmeren. Ik neem je stap voor stap mee hoe dat moet. Lees wel al mijn aanwijzingen goed door. 

![Uitvinder Oma](HYPERLINK NAAR AFBEELDING ONLINE)

Alright? Let's go! 

### Geef BEP een hart! @showhint

Sleep uit ``||basic:Basis||`` het blokje ``||basic:toon lichtjes||`` en zet hem in de ``||basic:de hele tijd||`` blok en teken een hart!

![An animation that shows how to drag a block and paint a heart](/static/mb/projects/flashing-heart/showleds.gif)

```namespace```
Het komt er dan zoals hieronder uit te zien!
```

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
})
```
### Geef BEP een naam! @showhint
Sleep nu uit ``||basic:Basis||`` het blokje ``||basic:toon tekens||`` en zet deze in ``||basic:bij opstarten||``. Schrijf in dit nieuwe blok de naam van jouw BEP.

```blocks
basic.showString("typ hier de naam van jouw BEP")
})
```

### Controleer je code! @showhint
Je zou nu links bij de 'test' @boardname@ op je scherm, 1x BEP's naam moeten zien en daarna het hart.

Dat komt door de twee start blokken ``||basic:bij opstarten||`` en ``||basic:de hele tijd||``
Als de micro:bit aangaat zal deze eerst alle blokjes uit de ``||basic:bij opstarten||`` uitvoeren en daarna herhaald de micro:bit de blokjes uit ``||basic:de hele tijd||``

Als dit is gelukt gaan we dit nu op jouw BEP programmeren!
```blocks
basic.showString("BEP")
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
})
```

### De code naar BEP sturen
Zoals je hebt gemerkt werkt je geprogrammeerde code niet direct op jouw BEP. Daarvoor moeten we hem eerst ``|Download|`` naar de micro:bit. 
Als je de @boardname@ aan hebt gesloten met de USB kabel op je chromebook mag je op ``|Download|`` klikken om jouw code naar BEP te sturen!

# Gelukt?!
### De code naar BEP sturen @unplugged
![gif werkende BEP](https://bouwjebep.nl/wp-content/uploads/2020/10/BEP2-1024x1024.png)

Is dit ook bij jou gelukt?! Gefeliciteerd je bent nu officiëel programmeur! 

## 2. BEP's discolicht gebruiken

### BEP's discolicht gebruiken @showdialog

Zoals je al hebt kunnen zien heeft BEP een cool discolampje op het extensiebord.
In de volgende stappen leer ik je verschillende kleuren licht te programmeren!

![Uitvinder Oma](HYPERLINK NAAR AFBEELDING ONLINE)

### Step 1 @showhint

Sleep links uit ``||BEP:Bouw je BEP||`` het blokje ``||bep:Zet LED licht op||``  
en plaats hem in de ``||basic:de hele tijd||`` blok en kies je favoriete kleur!

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
})
```

## 2. BEP's discolicht gebruiken

### BEP's discolicht gebruiken @showdialog

Zoals je al hebt kunnen zien heeft BEP een cool discolampje op het extensiebord.
In de volgende stappen leer ik je verschillende kleuren licht te programmeren!

![Uitvinder Oma](HYPERLINK NAAR AFBEELDING ONLINE)

### Step 1 @showhint

Sleep links uit ``||BEP:Bouw je BEP||`` het blokje ``||bep:Zet LED licht op||``  
en plaats hem in de ``||basic:de hele tijd||`` blok en kies je favoriete kleur!

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
})
```
### Step 2
Klik nu weer op de knop ``|Download|`` zodat je je code stuurt naar de micro:bit. 

### Step 3

Top! Maar 1 kleur licht is natuurlijk geen discolicht. Daar gaan we wat aan doen!
Sleep uit ``||basic:Basis||`` het blokje ``||basic:pauzeer (ms)||`` en zet hem 
in de ``||basic:de hele tijd||`` onder ``||bep:Zet licht op||``.

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # .
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
    basic.pause(100)
})
```

### Step 4
Zet de ``||basic:pauzeer (ms)||`` op 1 seconde.

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # .
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
    basic.pause(1000)
})
```

### Step 5
Zet nu een extra ``||bep:Zet licht op||`` met een andere kleur onder de ``||basic:pauzeer (ms)||``
en zet ook daaronder weer een ``||basic:pauzeer (ms)||`` op 1 seconde.

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # .
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
    basic.pause(1000)
    BEP.setLedColor(0x0080FF)
    basic.pause(1000)
})
```
### Step 6
Klik nu weer op de knop ``|Download|`` zodat je je code stuurt naar de micro:bit. 

### Gelukt?!

Knippert jouw licht nu ook? Je kunt op deze manier nog meer licht kleuren erbij maken!
BEP beweegt ondanks het discolicht nog niet.. Zullen we daar eens verandering inbrengen?

Op naar de laatste stap!

## 3. BEP laten bewegen

### Step 1 
Sleep uit ``||basic:Basis||`` het blokje ``||basic:de hele tijd||`` en zet 
deze naast de andere ``||basic:de hele tijd||``.

```blocks
basic.showString("BEP")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # .
        . # # # .
        . . # . .
        `)
    BEP.setLedColor(0x00FF00)
    basic.pause(1000)
    BEP.setLedColor(0x0080FF)
    basic.pause(1000)
})
basic.forever(function () {
})
```

### Step 2 @showhint

Sleep 5 ``||bep:Breng ... naar positie||`` blokken uit ``||bep:Bouw je BEP||`` 
naar de nieuwe ``||basic:de hele tijd||``.
```blocks
basic.forever(function () {
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
})
```

### Step 2 @showhint

Zet nu elke ``||bep:Breng ... naar positie||`` op ander een onderdeel van BEP en zet de positie zoals aangegeven op het voorbeeld hieronder.
```blocks
})
basic.forever(function () {
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 1)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 1)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
})
```
### Step 3 @showhint
Zet nu een ``||basic:pauzeer (ms)||`` onder de laatste ``||bep:Breng ... naar positie||`` op 1 seconde.
```blocks
basic.forever(function () {
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 1)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 1)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
    basic.pause(1000)
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    BEP.servoWrite(BEP.Servos.Linkeroog, 0)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 2)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
    basic.pause(1000)
})
```

### Finish