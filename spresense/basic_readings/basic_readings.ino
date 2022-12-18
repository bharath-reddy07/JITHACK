// Basic demo for accelerometer readings from Adafruit MPU6050

#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <math.h>

#define ZSENSITIVITY 3.5
#define RZSENSITIVITY 0.2


Adafruit_MPU6050 mpu;

void setup(void) {
  Serial.begin(115200);

  // Try to initialize!
  Wire.begin();
  if (!mpu.begin(104, &Wire, 0)) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
}

float prevZ;
float prevRZ;


void loop() {

  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);



  if (abs(prevZ - a.acceleration.z) > ZSENSITIVITY) {
    Serial.print("POTHOLEEEE  UP DOWN");
    delay(1000);
  }

  if (abs(prevRZ - g.gyro.z) > RZSENSITIVITY) {
    Serial.print("POTHOLEEEE  ROLL ROLL");
    delay(1000);
  }

  prevZ = a.acceleration.z;

  prevRZ = g.gyro.z;

  delay(50);
}
