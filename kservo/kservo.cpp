#ifndef __KSERVO_CPP__
#define __KSERVO_CPP__

#include "kservo.h"

kservo::kservo(void) {}

void kservo::init(void)
{
	// Use the same iPORT configuration
	// Config Timer0 to use PWM
	ledc_timer_config_t timer_conf;
	timer_conf.duty_resolution = LEDC_TIMER_16_BIT;
	timer_conf.freq_hz = 500; // 500Hz
	timer_conf.speed_mode = LEDC_HIGH_SPEED_MODE;
	timer_conf.timer_num = LEDC_TIMER_0;
	ledc_timer_config(&timer_conf);

	// Config Timer1 to use Servo
	ledc_timer_config_t timer_conf2;
	timer_conf2.duty_resolution = LEDC_TIMER_16_BIT;
	timer_conf2.freq_hz = 50; // 50Hz
	timer_conf2.speed_mode = LEDC_HIGH_SPEED_MODE;
	timer_conf2.timer_num = LEDC_TIMER_1;
	ledc_timer_config(&timer_conf2);

	servoCalibrate(26, 0.6, 2.4); // Calibrate KServo for OUT1
	servoCalibrate(27, 0.6, 2.4); // Calibrate KServo for OUT2
	servoCalibrate(15, 0.6, 2.4); // Calibrate KServo for KSERVO1
	servoCalibrate(17, 0.6, 2.4); // Calibrate KServo for KSERVO2
	// clear error flag
	error = false;
	// set initialized flag
	initialized = true;
}
int kservo::prop_count(void)
{
	// not supported
	return 0;
}

bool kservo::prop_name(int index, char *name)
{
	// not supported
	return false;
}

bool kservo::prop_unit(int index, char *unit)
{
	// not supported
	return false;
}

bool kservo::prop_attr(int index, char *attr)
{
	// not supported
	return false;
}

bool kservo::prop_read(int index, char *value)
{
	// not supported
	return false;
}

bool kservo::prop_write(int index, char *value)
{
	// not supported
	return false;
}

void kservo::process(Driver *drv) {}

// analog write, copy from PWM plugin
uint8_t kservo::getIndexFromPin(uint8_t pin, bool isServo)
{
	uint8_t index = getLEDCChannelFromPin(pin);
	if (index == 255)
	{
		index = setupLEDCFromPin(pin, isServo);
	}
	return index;
}

uint8_t kservo::getLEDCChannelFromPin(uint8_t pin)
{
	uint8_t index = 255;
	for (int i = 0; i < nextPointPWMConfigState; i++)
	{
		if (pwmConfigState[i].pin == pin)
		{
			index = i;
			break;
		}
	}
	return index;
}

uint8_t kservo::setupLEDCFromPin(uint8_t pin, bool isServo)
{
	uint8_t index = nextPointPWMConfigState++;

	struct configState &config = pwmConfigState[index];

	config = {
		.pin = pin,
		.ledc_ch = index,
		.duty = {
			.min = SERVO_DUTY_MIN,
			.max = SERVO_DUTY_MAX}};

	ledc_channel_config_t ledc_conf;
	ledc_conf.channel = static_cast<ledc_channel_t>(config.ledc_ch);
	ledc_conf.duty = 0;
	ledc_conf.gpio_num = config.pin;
	ledc_conf.intr_type = LEDC_INTR_DISABLE;
	ledc_conf.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf.timer_sel = !isServo ? LEDC_TIMER_0 : LEDC_TIMER_1;
	ledc_channel_config(&ledc_conf);

	return index;
}

void kservo::servoCalibrate(int pin, float min, float max)
{
	int index = getIndexFromPin(pin, true);
	pwmConfigState[index].duty.min = 0xFFFF * min / 20.0;
	pwmConfigState[index].duty.max = 0xFFFF * max / 20.0;
}

void kservo::kservo270(int pin, int angle)
{
	angle = angle < 0 ? 0 : angle;
	angle = angle > 270 ? 270 : angle;

	int index = getIndexFromPin(pin, true); // isServo = true

	// Cal duty
	int min = pwmConfigState[index].duty.min;
	int max = pwmConfigState[index].duty.max;
	int duty = angle * (max - min) / 270.0 + min;

	ledc_set_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch), duty);
	ledc_update_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch));
}
void kservo::kservo270stop(int pin)
{
	int index = getIndexFromPin(pin, true); // isServo = true
	ledc_set_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch), 0xFFFF);
	ledc_update_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch));
}
void kservo::kservo360(int pin, int direction, int spd)
{
	spd = spd < 0 ? 0 : spd;
	spd = spd > 100 ? 100 : spd;

	//(x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	int spd_to_ang = (double)spd * 90.0 / 100.0;
	spd_to_ang = spd_to_ang < 0 ? 0 : spd_to_ang;
	spd_to_ang = spd_to_ang > 90 ? 90 : spd_to_ang;

	int index = getIndexFromPin(pin, true); // isServo = true

	// Cal duty
	int min = pwmConfigState[index].duty.min;
	int max = pwmConfigState[index].duty.max;
	int duty = (direction ? (90 - spd_to_ang) : (90 + spd_to_ang)) * (max - min) / 180.0 + min;

	ledc_set_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch), duty);
	ledc_update_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch));
}
void kservo::kservo360stop(int pin)
{
	int index = getIndexFromPin(pin, true); // isServo = true
	ledc_set_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch), 0xFFFF);
	ledc_update_duty(LEDC_HIGH_SPEED_MODE, static_cast<ledc_channel_t>(pwmConfigState[index].ledc_ch));
}

// KidBright JR-BOT (INEX)
void kservo::setJRBOTkServoPin(int _left_pin, int _right_pin)
{
	w2d_left_pin = (uint8_t)_left_pin;
	w2d_right_pin = (uint8_t)_right_pin;
}
void kservo::JRBOTMove(int direction, int spd)
{
	switch (direction)
	{
	case 0: // Forward
		kservo360(w2d_left_pin, 0, spd);
		kservo360(w2d_right_pin, 1, spd);
		break;
	case 1: // Backward
		kservo360(w2d_left_pin, 1, spd);
		kservo360(w2d_right_pin, 0, spd);
		break;
	case 2: // Turn Left
		kservo360(w2d_left_pin, 0, 0);
		kservo360(w2d_right_pin, 1, spd);
		break;
	case 3: // Turn Right
		kservo360(w2d_left_pin, 0, spd);
		kservo360(w2d_right_pin, 1, 0);
		break;
	case 4: // Spin Left
		kservo360(w2d_left_pin, 1, spd);
		kservo360(w2d_right_pin, 1, spd);
		break;
	case 5: // Spin Right
		kservo360(w2d_left_pin, 0, spd);
		kservo360(w2d_right_pin, 0, spd);
		break;
	}
}
void kservo::JRBOTMove2(int direction, int spd_l, int spd_r)
{
	switch (direction)
	{
	case 0: // Forward
		kservo360(w2d_left_pin, 0, spd_l);
		kservo360(w2d_right_pin, 1, spd_r);
		break;
	case 1: // Backward
		kservo360(w2d_left_pin, 1, spd_l);
		kservo360(w2d_right_pin, 0, spd_r);
		break;
	}
}
void kservo::JRBOTStop()
{
	kservo360stop(w2d_left_pin);
	kservo360stop(w2d_right_pin);
}
#endif