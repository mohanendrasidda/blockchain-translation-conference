// Sample WebRTC data packet
const startTime = performance.now();
const dataPacket = {
  sender: "alice@example.com",
  recipient: "bob@example.com",
  messageType: "text",
  messageContent: " ",
  timestamp: Date.now()
};
const endTime = performance.now();
const jsonString = JSON.stringify(dataPacket);

// Return the length of the JSON string in bytes
const dataSizeInBytes = new Blob([jsonString]).size;
console.log("Data size in bytes:", dataSizeInBytes);

// Function to process WebRTC data packet
function processDataPacket(dataPacket) {
  console.log("Received data packet from:", dataPacket);

  // Calculate latency in milliseconds
  const latency = endTime - startTime;
  const throughputtime = latency/1000;
  const datainmb= 26/(1024*1024);
  console.log("Latency:", latency, "milliseconds");

  // Calculate throughput (bytes per millisecond)
  const throughput = datainmb / throughputtime;
  console.log("Throughput:", throughput, "mb per seconds");

  // Additional processing logic can be added here
}

// Call the function with the WebRTC data packet
processDataPacket(dataPacket);
