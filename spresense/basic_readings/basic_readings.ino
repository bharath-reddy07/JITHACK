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
  //Serial.println("Adafruit MPU6050 test!");

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

float prevZ ;
float prevRZ ;


void loop() {

  /* Get new sensor events with the readings */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  /* Print out the values */
//  Serial.print(a.acceleration.x);
//  Serial.print(",");
//  Serial.print(a.acceleration.y);
//  Serial.print(",");
//  Serial.print(a.acceleration.z);
//    Serial.print(prevZ);
//  Serial.print(prevZ - a.acceleration.z);


  if(abs(prevZ - a.acceleration.z) > ZSENSITIVITY){
    Serial.print("POTHOLEEEE  UP DOWN");
    delay(1000);
    }

  if(abs(prevRZ - g.gyro.z) > RZSENSITIVITY){
    Serial.print("POTHOLEEEE  ROLL ROLL");
    delay(1000);
    }
  //Serial.print(prevRZ - g.gyro.z);

//
//  Serial.print(g.gyro.x);
//  Serial.print(",");
//  Serial.print(g.gyro.y);
//  Serial.print(",");
//  Serial.print(g.gyro.z);

  prevZ = a.acceleration.z;

  prevRZ = g.gyro.z;
  


  Serial.println("");
  delay(50);
}
