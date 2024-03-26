const { createClient } = require("redis");
module.exports = createClient({
  password: "CyUmcjll25GKNjFluVxu7EACeLHddAsu",
  socket: {
    host: 'redis-15982.c295.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 15982
    // keepAlive: 10000,
  },
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();
