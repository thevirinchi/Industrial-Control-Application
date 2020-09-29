const int ledPin = 13;
int incomingByte;

void setup(){
    Serial.begin(9600);
    pinMode(ledPin, OUTPUT);
}

void loop(){
    if(Serial.available() > 0){
        incomingByte = Serial.read();
        if(incomingByte == 'H')
            digitalWite(ledPin, HIGH);
        if(incomingByte == 'L')
            digitalWite(ledPin, LOW);
    }
}