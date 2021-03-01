### @activities 1

## 1. BEP tot leven brengen

# Bouw je BEP
### Daar gaan we! @unplugged

In de deze les gaan we aan de slag met programmeren. Ik neem je stap voor stap mee hoe dat moet. Lees wel al mijn aanwijzingen goed door. 

![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

Alright? Let's go! 


### Geef BEP een hart! @showhint
Klik links op ``||basic:Basis||``, sleep het blokje ``||basic:toon lichtjes||`` eruit en zet hem in ``||basic:de hele tijd||`` blok en teken een hart!

![Animatie maken van een LED hart](/static/mb/projects/flashing-heart/showleds.gif)

### Geef BEP een naam! @showhint
Sleep nu uit ``||basic:Basis||`` het blokje ``||basic:toon tekens||`` en zet deze in ``||basic:bij opstarten||``. Schrijf in dit nieuwe blok de naam van jouw BEP.

```blocks
basic.showString("typ hier de naam van jouw BEP")
})
```

### Controleer je code! @showhint
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

### De code naar BEP sturen @fullscreen
Hiervoor moeten wij de code eerst ``|Downloaden|`` naar de micro:bit.
Als je de @boardname@ aan hebt gesloten met de USB kabel op je chromebook, moet je de micro:bit vaak eerst koppelen zoals in het filmpje.
![Koppelen van de microbit](/static/mb/projects/flashing-heart/showleds.gif)
Als dat is gelukt kun je nu op ``|Downloaden|`` klikken om jouw code naar BEP te sturen!

### De code naar BEP sturen @unplugged
# Gelukt?!
Is dit ook bij jou gelukt?! Gefeliciteerd je bent nu officiëel een programmeur! 
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

## 2. BEP's discolicht gebruiken

### BEP's discolicht gebruiken @showdialog

Zoals je al hebt kunnen zien heeft BEP een cool discolampje op het extensiebord.
In de volgende stappen leer ik je verschillende kleuren licht te programmeren!
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)

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

### Step 2 @showhint

Sleep vijf ``||bep:Breng ... naar positie||`` blokken uit ``||bep:Bouw je BEP||`` 
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

### Step 3 @showhint

Weet je nog dat je goed moest kijken welk onderdeel van BEP je op welke pin moest aansluiten? Dat komt omdat we elke servo motor apart aansturen!

Zet nu elke ``||bep:Breng ... naar positie||`` op ander een onderdeel van BEP en zet de positie zoals aangegeven op het voorbeeld.
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

### Step 4 @showhint

Als dit is gelukt mag je weer op ``|Downloaden|`` klikken! Wat doet BEP nu?

Probeer nu eens andere posities uit in je programma. Nu je weet hoe je de servo motoren kunt aansturen mag je BEP een emotie programmeren zoals: boos, blij of verdrietig.
Je mag hier ook de kleur van het licht voor gebruiken!

Zet nu elke ``||bep:Breng ... naar positie||`` op ander een onderdeel van BEP en zet de positie zoals aangegeven op het voorbeeld.
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
### Step 5 @showhint
Heb je BEP een emotie kunnen geven? Wat goed!

We gaan deze emotie nu op een knop zetten. Om dat te doen sleep je uit ``||input:input||`` het blok ``||input:wanneer knop A wordt ingedrukt||``
en sleep deze in het werkveld. 
```blocks
input.onButtonPressed(Button.A, function () {
})
```
### Step 6 @showhint
Je kan nu in één keer je emotie overslepen naar de ``||input:wanneer knop A wordt ingedrukt||`` blok. Je kunt bij de tip zien hoe.

GIF

### Step 7 @showhint
Rechterklik nu eens op  ``||input:wanneer knop A wordt ingedrukt||`` blok. Klik dan op dupliceren. Je kunt bij de tip zien hoe dat moet!

één van de blokjes is nu grijs. Dat betekend dat hij niet kan werken. Dit komt omdat er maar 1 programma per knop kan worden gemaakt. Je kunt dit oplossen door ``||input:A||`` te veranderen in ``||input:B||``!
```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```
### Step 8 
Verander nu de posities onder de knop ``||input:A||`` en druk daarna weer op ``|Downloaden|``.
Je kunt nu op knop A en B drukken om BEP te laten bewegen!

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
### Finish @showdialog
Je hebt alle basisstappen voltooid om BEP te programmeren! Ik ben trots op je! 
![Uitvinder Oma](https://bouwjebep.nl/wp-content/uploads/2021/03/uitvinderoma-klein.png)
Als je verder gaat kun je nog veel meer blokken gebruiken om jouw BEP te programmeren. 
Misschien kun je BEP nog meer laten bewegen op muziek met discolicht of extra emoties op BEP programmeren.
