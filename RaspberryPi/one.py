import serial
import time

ser = serial.Serial("/dev/ttyACM0", 9600, timeout=1)
time.sleep(2)

for i in range(10):
    ser.writelines(b'H')
    time.sleep(1)
    ser.writelines(b'L')
    time.sleep(1)

ser.close()
