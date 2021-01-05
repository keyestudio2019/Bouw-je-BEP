/**
  * Pre-Defined LED colours
  */
 enum vColors
 {
     //% block=red
     Red = 0xff0000,
     //% block=orange
     Orange = 0xffa500,
     //% block=yellow
     Yellow = 0xffff00,
     //% block=green
     Green = 0x00ff00,
     //% block=blue
     Blue = 0x0000ff,
     //% block=indigo
     Indigo = 0x4b0082,
     //% block=violet
     Violet = 0x8a2be2,
     //% block=purple
     Purple = 0xff00ff,
     //% block=white
     White = 0xffffff,
     //% block=black
     Black = 0x000000
 }
/**
 * Blocks for programming Bouw je BEP with the 4tronix Servobit I2C 16-Servo Driver Board 
 */
//% weight=100 color=#F5992B icon="\uf004" block="Bouw je BEP"
namespace BEP {

        let fireBand: fireled.Band;
        let _flashing = false;

    //Some useful parameters. 
        let ChipAddress = 0x40 //default Chip address
        let PrescaleReg = 0xFE //the prescale register address
        let Mode1Reg = 0x00  //The mode 1 register address
     
    // If you wanted to write some code that stepped through the servos then this is the BASe and size to do that 	
        let Servo1RegBase = 0x08 
        let ServoRegDistance = 4
        //To get the PWM pulses to the correct size and zero offset these are the default numbers. 
        let ServoMultiplier = 226
        let ServoZeroOffset = 0x66
    
        let initalised = false //a flag to allow us to initialise without explicitly calling the secret incantation
    
        //nice big list of servos for the block to use. These represent register offsets in the PCA9865
        export enum Servos {
            Rechteroog = 0x08, // Rechteroog is pin 1
            Linkeroog = 0x0C,		// Linkeroog is pin 2
            Geletandwiel = 0x10,		// Omhoog of omlaag is pin 3
            Rechterwenkbrauw = 0x14,		// Rechter wenkbrauw
            Linkerwenkbrauw = 0x18,		// Linkerwenkbrauw 
            //Servo6 = 0x1C,		
            //Servo7 = 0x20,		
            //Servo8 = 0x24,
            //Servo9 = 0x28,
            //Servo10 = 0x2C,
            //Servo11 = 0x30,
            //Servo12 = 0x34,
            //Servo13 = 0x38,
            //Servo14 = 0x3C,
            //Servo15 = 0x40,
            //Servo16 = 0x44,
        }
    
        export enum BoardAddresses{
            Board1 = 0x40,
            
        }
        //Trim the servo pulses. These are here for advanced users, and not exposed to blocks.
        //It appears that servos I've tested are actually expecting 0.5 - 2.5mS pulses, 
        //not the widely reported 1-2mS 
        //that equates to multiplier of 226, and offset of 0x66
        // a better trim function that does the maths for the end user could be exposed, the basics are here 
        // for reference
    
        export function TrimServoMultiplier(Value: number) {
            if (Value < 113) {
                ServoMultiplier = 113
            }
            else {
                if (Value > 226) {
                    ServoMultiplier = 226
                }
                else {
                    ServoMultiplier = Value
                }
    
            }
        }
        export function TrimServoZeroOffset(Value: number) {
            if (Value < 0x66) {
                ServoZeroOffset = 0x66
            }
            else {
                if (Value > 0xCC) {
                    ServoZeroOffset = 0xCC
                }
                else {
                    ServoZeroOffset = Value
                }
    
            }
        }
    
        /*
            This secret incantation sets up the PCA9865 I2C driver chip to be running at 50Hx pulse repetition, and then sets the 16 output registers to 1.5mS - centre travel.
            It should not need to be called directly be a user - the first servo write will call it.
        
        */
        function secretIncantation(): void {
            let buf = pins.createBuffer(2)
    
            //Should probably do a soft reset of the I2C chip here when I figure out how
    
            // First set the prescaler to 50 hz
            buf[0] = PrescaleReg
            buf[1] = 0x85
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            //Block write via the all leds register to set all of them to 90 degrees
            buf[0] = 0xFA
            buf[1] = 0x00
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            buf[0] = 0xFB
            buf[1] = 0x00
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            buf[0] = 0xFC
            buf[1] = 0x66
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            buf[0] = 0xFD
            buf[1] = 0x00
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            //Set the mode 1 register to come out of sleep
            buf[0] = Mode1Reg
            buf[1] = 0x81
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            //set the initalised flag so we dont come in here again automatically
            initalised = true
        }
        
        
    /**
         * sets the requested servo to the reguested angle.
         * if the PCA has not yet been initialised calls the initialisation routine
         *
         * @param Servo Which servo to set
         * @param stand the angle to set the servo to
         */
        //% blockId=BEP_I2Cservo_write
        //% block="Zet %Servo|op stand %stand"
        //% group="Servo motors"
        //% stand.min=0 stand.max=2
        
        export function servoWrite(Servo: Servos, stand: number): void {
            if (initalised == false) {
                secretIncantation()
            }
            
        // Calculate the right degrees, based on 4 step input: 1 = 15, 2 = 52,  3 = 89, 4 = 126, 5 = 163 with base = 15 degrees, intermdiate steps = 37
        let choice = stand
        let degrees2 = stand
        
        if (choice <=0){
            degrees2=65
        }
        else if(choice ==1){
            degrees2 = 90
        }
        else if(choice >=2){
            degrees2 = 130
        }
        //else if(choice >=3){
        //    degrees2 = 110
        //}
        //else if(choice == 4){
        //degrees2 = 135
        //}
        
    
            let buf = pins.createBuffer(2)
            let HighByte = false 
            let deg100 = degrees2 * 100
            let PWMVal100 = deg100 * ServoMultiplier
            let PWMVal = PWMVal100 / 10000
            PWMVal = Math.floor(PWMVal)
            PWMVal = PWMVal + ServoZeroOffset
            if (PWMVal > 0xFF) {
                HighByte = true
            }
            buf[0] = Servo
            buf[1] = PWMVal
            pins.i2cWriteBuffer(ChipAddress, buf, false)
            if (HighByte) {
                buf[0] = Servo + 1
                buf[1] = 0x01
            }
            else {
                buf[0] = Servo + 1
                buf[1] = 0x00
            }
            pins.i2cWriteBuffer(ChipAddress, buf, false)
        }
    
    // FireLed Status Blocks

    // create a FireLed band if not got one already. Default to brightness MAX (255)
    function fire(): fireled.Band
    {
        if (!fireBand)
        {
            fireBand = fireled.newBand(DigitalPin.P16, 1);
            fireBand.setBrightness(255);
        }
        return fireBand;
    }

    // Always update status LED
    function updateLEDs(): void
    {
        fire().updateBand();
    }

    /**
      * Sets the status LED to a given color (range 0-255 for r, g, b).
      * @param rgb colour of the LED
      */
    //% blockId="val_set_led_color" block="Zet LED licht op %rgb=val_colours"
    //% group="LED lampje"
    //% weight=100 
    export function setLedColor(rgb: number)
    {
        stopFlash();
        setLedColorRaw(rgb);
    }

    function setLedColorRaw(rgb: number)
    {
        fire().setBand(rgb);
        updateLEDs();
    }

    /**
      * Clear LED
      */
    //% blockId="val_led_clear" block="LED uit"
    //% group="LED lampje"
    //% weight=10
    export function ledClear(): void
    {
        stopFlash();
        ledClearRaw();
    }

    function ledClearRaw(): void
    {
        fire().clearBand();
        updateLEDs();
    }

    /**
     * Set the brightness of the LED
     * @param brightness a measure of LED brightness in 0-255. eg: 40
     */
    //% blockId="val_led_brightness" block="Sterkte van het licht %brightness"
    //% brightness.min=0 brightness.max=255
    //% group="LED lampje"
    //% weight=50
    export function ledBrightness(brightness: number): void
    {
        fire().setBrightness(brightness);
        updateLEDs();
    }

    /**
      * Get numeric value of colour
      * @param color Standard RGB Led Colours eg: #ff0000
      */
    //% blockId="val_colours" block=%color
    //% blockHidden=true
    //% group="LED lampje"
    //% weight=100
    //% blockGap=8
    //% shim=TD_ID colorSecondary="#e7660b"
    //% color.fieldEditor="colornumber"
    //% color.fieldOptions.decompileLiterals=true
    //% color.defl='#ff0000'
    //% color.fieldOptions.colours='["#FF0000","#659900","#18E600","#80FF00","#00FF00","#FF8000","#D82600","#B24C00","#00FFC0","#00FF80","#FFC000","#FF0080","#FF00FF","#B09EFF","#00FFFF","#FFFF00","#8000FF","#0080FF","#0000FF","#FFFFFF","#FF8080","#80FF80","#40C0FF","#999999","#000000"]'
    //% color.fieldOptions.columns=5
    //% color.fieldOptions.className='rgbColorPicker'
    export function vColours(color: number): number
    {
        return color;
    }

    /**
      * Convert from RGB values to colour number
      *
      * @param red Red value of the LED (0 to 255)
      * @param green Green value of the LED (0 to 255)
      * @param blue Blue value of the LED (0 to 255)
      */
    //% blockId="val_convertRGB" block="convert from red %red| green %green| blue %blue"
    //% blockHidden=true
    //% weight=40
    export function convertRGB(r: number, g: number, b: number): number
    {
        return ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF);
    }

    /**
      * Start Flashing
      * @param color the colour to flash
      * @param delay time in ms for each flash, eg: 100,50,200,500
      */
    //% blockId="startFlash" block="Knipper %color=val_colours| at %delay|(ms)"
    //% delay.min=1 delay.max=10000
    //% weight=90
    export function startFlash(color: number, delay: number): void
    {
        if(_flashing == false)
        {
            _flashing = true;
            control.inBackground(() =>
            {
                while (_flashing)
                {                                
                    setLedColorRaw(color);
                    basic.pause(delay);
                    if (! _flashing)
                        break;
                    ledClearRaw();
                    basic.pause(delay);
                }
            })
        }
    }

    /**
      * Stop Flashing
      */
    export function stopFlash(): void
    {
        _flashing = false;
    }
}
