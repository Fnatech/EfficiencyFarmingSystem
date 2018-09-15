//imported libraries
#include <SoftwareSerial.h>


static char respBuffer[4096];

// global constant
const char ssid[] = "ZTEH108N_09850";
const char ssidPass[] = "bawaldownload888";
const char hostName[] = "http://192.168.254.107";
const short hostPort = 9000;

unsigned long lastTimeMillis = 0;

String data = "tae:123";


// global var
float phValueGlobal = 0;
boolean isSetup = false;
String response = "";
String soil = "";
boolean sending = false;
boolean opened = false;
char temp[200];

SoftwareSerial esp8266(2, 3); /* RX:D3, TX:D2 */

#define SensorPin A0            //pH meter Analog output to Arduino Analog Input 0
#define Offset 0.00            //deviation compensate
#define LED 13
#define samplingInterval 20
#define printInterval 800
#define ArrayLenth  40    //times of collection
int pHArray[ArrayLenth];   //Store the average value of the sensor feedback
int pHArrayIndex=0;  

void setup() {
  pinMode(LED,OUTPUT);  
  Serial.println("pH meter experiment!");
  esp8266.begin(115200);
  Serial.begin(115200);

  reset();
  delay(500);
  setupConfiguration();
  delay(1000);
  connect();
  delay(500);
  establishTCPConnection();
  delay(500);

}


void loop() {

  static unsigned long samplingTime = millis();
  static unsigned long printTime = millis();
  static float pHValue,voltage;
  if(millis()-samplingTime > samplingInterval)
  {
      pHArray[pHArrayIndex++]=analogRead(SensorPin);
      if(pHArrayIndex==ArrayLenth)pHArrayIndex=0;
      voltage = avergearray(pHArray, ArrayLenth)*5.0/1024;
      pHValue = 3.5*voltage+Offset;
      samplingTime=millis();
  }
  if(millis() - printTime > printInterval)   //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
        Serial.print("Voltage:");
        Serial.print(voltage,2);
        Serial.print("    pH value: ");
        Serial.println(pHValue,2);
        phValueGlobal = pHValue;
        digitalWrite(LED,digitalRead(LED)^1);
        printTime=millis();
  }
  delay(1000);
       send();
//   getData();
//   checkResponseValue();
//   delay(1000);
}

void reset() {
  esp8266.println("AT+RST");
  delay(1000);
  if (esp8266.find("OK")) Serial.println("Module Had been reset");
}

void connect() {
  const char cmd[] = "AT+CWJAP=\"ZTEH108N_09850\",\"bawaldownload888\"";
  esp8266.println(cmd);
  delay(4000);
  if (esp8266.find("OK")) {
    Serial.println("Connected to WIFI.");
  }
}



void printResponse() {
  while (esp8266.available()) {
    Serial.println(esp8266.readStringUntil('\r'));
  }
}

void establishTCPConnection() {
//  const char cmd[] = "AT+CIPSTART=\"TCP\",\"192.168.254.107\",3000";
  const char cmd[] = "AT+CIPSTART=\"TCP\",\"192.168.254.107\",9000";
  esp8266.println(cmd);
  if (esp8266.find("OK")) {
//    Serial.println("TCP Connection Ready.");
    delay(1000);
  }
}

void setupConfiguration() {
  esp8266.println("AT+CWMODE=3");
  delay(500);
  esp8266.println("AT+CIPMUX=1");
  delay(500);
  esp8266.println("AT+CIPSERVER=1,80");
  delay(5000);
}

void send() {
  if (millis() - lastTimeMillis > 10000) {
    lastTimeMillis = millis();

    esp8266.println("AT+CIPMUX=1");
    delay(500);
    esp8266.println("AT+CIPSTART=4,\"TCP\",\"192.168.254.107\",9000");
    //192.168.10.148 -> lab
    //192.168.254.103 -> dianzel
    delay(500);
    Serial.println("****");
    String floatToString = (String)phValueGlobal;
    Serial.println(floatToString);
    Serial.println("****");
    String cmd = getPostRequest(floatToString);
    esp8266.println("AT+CIPSEND=4," + String(cmd.length() + 4));
    delay(1000);
    esp8266.println(cmd);
    delay(500);
    esp8266.println("");
  }

}

void getData() {
  esp8266.println("AT+CIPMUX=1");
  delay(500);
  esp8266.println("AT+CIPSTART=4,\"TCP\",\"192.168.254.107\",9000");
  delay(1000);
  String cmd = "GET /custom/5aa6a508f4ad6f09543c8a2b HTTP/1.1";
  esp8266.println("AT+CIPSEND=4," + String(cmd.length() + 4));
  delay(1000);
  esp8266.println(cmd);
  delay(500);
  esp8266.println("");
 
}

void checkResponseValue() {
  
  if (esp8266.available() > 0) {

    Serial.print("PRINTING RESPONSE:");
    printResponse();
  } 
}



String getJSON(String data) {
  String json = "\"passcode\":";
  json += "\"";
  json += data;
  json += "\"";
  return json;
}


String getGetRequest() {
  String req = "GET /";
//  req += "/custom/?d";
  req += "/custom/5aa6a508f4ad6f09543c8a2b";
  req += " HTTP/1.1\r\n";
  return req;
}

String getPostRequest(String postData) {
    String post = "POST /";
      post += "soil";
    post += " HTTP/1.1\r\n";
    post += "Host: ";
    post += hostName;
    post += "\r\n";
    post += "Accept: *";
    post += "/";
    post += "*\r\n";
    post += "Content-Length: ";
//    post += data.length();
    post += postData.length();
    post += "\r\n";
    post += "Content-Type: application/x-www-form-urlencoded\r\n";
    post += "\r\n";
    post += postData;
    
    return post;
}

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    Serial.println("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg; 
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}
