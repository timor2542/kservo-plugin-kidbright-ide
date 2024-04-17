#ifndef __KSERVO_H__
#define __KSERVO_H__
#include "driver.h"
#include "device.h"
#include "driver/gpio.h"
#include "driver/adc.h"
#include "esp_adc_cal.h"
#include "driver/ledc.h"

#include <math.h>
#include <string.h>
#include <inttypes.h>

#define SERVO_DUTY_MIN 1638 // 0.5mS
#define SERVO_DUTY_MAX 8191 // 2.5mS

class kservo : public Device
{
private:
    // PWM
    struct configState
    {
        uint8_t pin;
        uint8_t ledc_ch;
        struct
        {
            int min;
            int max;
            int current;
        } duty;
    } pwmConfigState[5];
    uint8_t nextPointPWMConfigState = 0;

    uint8_t getIndexFromPin(uint8_t pin, bool isServo = false);
    uint8_t getLEDCChannelFromPin(uint8_t pin);
    uint8_t setupLEDCFromPin(uint8_t pin, bool isServo = false);

    uint8_t w2d_left_pin = 26; // Default 2WD JRBOT Left Wheel Pin OUT1
    uint8_t w2d_right_pin = 27; // Default 2WD JRBOT Left Wheel Pin OUT2

    void servoCalibrate(int pin, float min, float max);

public:
    // constructor
    kservo(void);

    // override
    void init(void);
    void process(Driver *drv);
    int prop_count(void);
    bool prop_name(int index, char *name);
    bool prop_unit(int index, char *unit);
    bool prop_attr(int index, char *attr);
    bool prop_read(int index, char *value);
    bool prop_write(int index, char *value);

    // method
    void kservo270(int pin, int angle);
    void kservo270stop(int pin);
    void kservo360(int pin, int direction, int spd);
    void kservo360stop(int pin);

    // KidBright JR-BOT (INEX)
    void setJRBOTkServoPin(int _left_pin, int _right_pin);
    void JRBOTMove(int direction, int spd);
    void JRBOTStop();
};
#endif