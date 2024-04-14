// Sample WebRTC data packet
const startTime = performance.now();
const dataPacket = {
  sender: "alice@example.com",
  recipient: "bob@example.com",
  messageType: "text",
  messageContent: "Hello, how's it going?",
  timestamp: Date.now()
};
const endTime = performance.now();

const mqttDataPacket = {
  topic: "sensors/temperature",
  payload: "", // Placeholder for payload, will be filled later
  qos: 1,
  retain: false,
  timestamp: Date.now()
};



// Function to process WebRTC data packet
function processDataPacket(mqttDataPacket) {

  // Set the payload of MQTT data packet to the message content of the WebRTC data packet
 
  mqttDataPacket.payload = dataPacket.messageContent;
  console.log("MQTT Data Packet:", mqttDataPacket);

  // Calculate latency in milliseconds
  const latency = endTime - startTime;
  const throughputtime = latency / 1000;
  const datainmb = 26 / (1024 * 1024);
  console.log("Latency:", latency, "milliseconds");

  // Calculate throughput (bytes per millisecond)
  const throughput = datainmb / throughputtime;
  console.log("Throughput:", throughput, "mb per seconds");

  

  // Additional processing logic can be added here
}

// Call the function with the WebRTC data packet
processDataPacket(mqttDataPacket);
