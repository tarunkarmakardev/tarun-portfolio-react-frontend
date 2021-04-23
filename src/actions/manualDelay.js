// Testing purposes :  server latency mimic

const manualDelay = (delay = 5000) => {
  console.log("Manually Delaying");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(console.log(`Delayed ${delay / 1000} seconds`));
    }, delay);
  });
};

export default manualDelay;
