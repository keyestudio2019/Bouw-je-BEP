### @diffs true
### @activities 1

## 1. BEP tot leven brengen

# Bouw je BEP
### Stap 1 Daar gaan we! @unplugged

In de deze les gaan we aan de slag met **programmeren**. Ik neem je stap voor stap mee hoe dat moet. **Lees wel al mijn aanwijzingen goed door!** 

![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

Alright? Let's go! 


### Stap 2 Geef BEP een hart! @showhint
Klik links op ``||basic:Basis||``, sleep het blokje ``||basic:toon lichtjes||`` eruit en zet hem in ``||basic:de hele tijd||`` blok en teken een hart!

![Animatie maken van een LED hart](/static/mb/projects/flashing-heart/showleds.gif)

### Stap 3 Geef BEP een naam! @showhint
Sleep nu uit ``||basic:Basis||`` het blokje ``||basic:toon tekens||`` en zet deze in ``||basic:bij opstarten||``. Schrijf in dit nieuwe blok de naam van jouw BEP.

```blocks
basic.showString("typ hier de naam van jouw BEP")
})
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
})
```

### Stap 4 Controleer je code! @showhint
Je zou nu links bij de 'test' @boardname@ op je scherm, 1x BEP's naam moeten zien en daarna het hart.

Dat komt door de twee start blokken: ``||basic:bij opstarten||`` en ``||basic:de hele tijd||``
Als de micro:bit aangaat zal deze eerst alle codeblokjes uit ``||basic:bij opstarten||`` uitvoeren en daarna herhaald de micro:bit de blokjes uit ``||basic:de hele tijd||``.

Zoals je hebt gemerkt werkt je geprogrammeerde code niet direct op jouw echte micro:bit en BEP. Ik laat in de volgende stap zien hoe je jouw code naar BEP stuurt!
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

### Stap 5 De code naar BEP sturen @fullscreen
Hiervoor moeten wij de code eerst ``|Downloaden|`` naar de micro:bit.
Als je de @boardname@ aan hebt gesloten met de USB kabel op je chromebook, moet je de micro:bit vaak **eerst koppelen** zoals in het filmpje.
![Koppelen van de microbit](https://bouwjebep.nl/wp-content/uploads/2021/03/BEP-microbit-koppelen.gif)
Als dat is gelukt kun je nu op ``|Downloaden|`` klikken om jouw code naar BEP te sturen!

### Stap 6 De code naar BEP sturen @unplugged
# Gelukt?!
Is dit ook bij jou gelukt?! **Gefeliciteerd je bent nu officiëel een programmeur!**
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

## 2. BEP's discolicht gebruiken

### Stap 7 BEP's discolicht gebruiken @fullscreen
Zoals je al hebt kunnen zien heeft BEP een cool discolampje op het extensiebord.
In de volgende stappen leer ik je verschillende kleuren licht te programmeren!
![Discolicht](https://bouwjebep.nl/wp-content/uploads/2021/03/BEP-microbit-koppelen.gif)

### Stap 8 @showhint
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
### Stap 9
Klik nu weer op de knop ``|Download|`` zodat je je code stuurt naar de micro:bit. 

### Stap 10
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

### Stap 11
Zet de ``||basic:pauzeer (ms)||`` op **1 seconde**.

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

### Stap 12 @fullscreen
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
### Stap 13
Klik nu weer op de knop ``|Download|`` zodat je je code stuurt naar de micro:bit. 

### Stap 14
Knippert jouw licht nu ook? Je kunt op deze manier nog meer kleuren erbij maken!
![Discolicht](https://bouwjebep.nl/wp-content/uploads/2021/03/BEP-microbit-koppelen.gif)

### Stap 15 Gelukt?! @unplugged
BEP beweegt ondanks het discolicht nog niet.. Zullen we daar eens verandering inbrengen?
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)
Op naar de laatste stap!

## Stap 16 BEP laten bewegen 

### Stap 17 
Sleep uit ``||basic:Basis||`` het blokje ``||basic:de hele tijd||`` en zet 
deze naast de andere ``||basic:de hele tijd||`` die je al hebt staan.

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

### Stap 18 @showhint

Sleep **vijf** ``||bep:Breng ... naar positie||`` blokken uit ``||bep:Bouw je BEP||`` 
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

### Stap 19 @showhint
Weet je nog dat je goed moest kijken welk onderdeel van BEP je op welke pin moest aansluiten? Dat komt omdat we elke servo motor apart aansturen!

Zet nu **elke** ``||bep:Breng ... naar positie||`` op ander een onderdeel van BEP en zet de positie zoals aangegeven op het voorbeeld.
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

### Stap 20 @showhint
Als dit is gelukt mag je weer op ``|Downloaden|`` klikken! Wat doet BEP nu?
![voorbeeld BEP1](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

### Stap 21 
Probeer nu eens andere posities per ``||bep:Breng ... naar positie||``. en klik daarna weer op de knop ``|Download|`` zodat je je code stuurt naar de micro:bit. 
BEP kijkt nu anders dan net! Nu weet je hoe servo motoren aangestuurd worden. 

### Stap 22 
**Laat nu BEP boos, blij of verdrietig kijken.**
![voorbeeld BEP2](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)


### Stap 23 @showhint
Heb je BEP een emotie kunnen geven? Wat goed!

We gaan deze emotie nu op een knop zetten. Om dat te doen klik je links op ``||input:input||`` en sleep blok ``||input:wanneer knop A wordt ingedrukt||``
naar je het werkveld. 
```blocks
input.onButtonPressed(Button.A, function () {
})
```
### Stap 24 @showhint
Je kan nu in één keer je emotie overslepen naar de ``||input:wanneer knop A wordt ingedrukt||`` blok. **Je kunt bij de tip zien hoe dit trucje werkt!**

![Blokken verslepen](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

### Stap 25 @showhint
Rechterklik nu eens op  ``||input:wanneer knop A wordt ingedrukt||`` blok. Klik dan op dupliceren. Je kunt bij de tip zien hoe dat moet!
![Blokken dupliceren](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)
één van de blokjes is nu grijs. Dat betekend dat hij niet kan werken. Dit komt omdat er maar 1 programma per knop kan worden gemaakt. Je kunt dit oplossen door ``||input:A||`` te veranderen in ``||input:B||``!
**Je kunt bij de tip goed zien hoe dit moet!**
```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```
### Stap 26 
Verander nu de posities onder de knop ``||input:B||`` en druk daarna weer op ``|Downloaden|``.
Je kunt nu op knop ``||input:A||`` en ``||input:B||`` drukken om BEP te laten bewegen!

```blocks
input.onButtonPressed(Button.A, function () {
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 2)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 1)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
})
input.onButtonPressed(Button.B, function () {
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    BEP.servoWrite(BEP.Servos.Linkeroog, 0)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 2)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 0)
})
```
### Finish @unplugged
Je hebt alle basisstappen voltooid om BEP te programmeren! Ik ben super trots op je! Als je verder gaat kun je nog veel meer blokken gebruiken om jouw BEP te programmeren. 
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)
**Je kunt nu verder programmeren of terug naar de lessen in LessonUp!**

