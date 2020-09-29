import serial
import time
import requests
import json

URL = "http://54.237.104.99:443/bulbstate"
PARAMS = {}

ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
time.sleep(2)

while (True):
	r = requests.get(url= URL, params = PARAMS)
	data = r.json()

	data = json.dumps(data)
	data = data[-2]
	print (data)
	if(data=="1"):
		ser.writelines(b'H')
	elif(data=="0"):
		ser.writelines(b'L')
	time.sleep(0.1)

ser.close()

