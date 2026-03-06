const client = require("./client");

async function init() {
  // SET
  await client.set("user:1:name", "Suryanshu");
  console.log("Name ->", await client.get("user:1:name"));

  // SET age
  await client.set("user:1:age", 21);
  console.log("Age ->", await client.get("user:1:age"));

  // INCR (counter example)
  await client.set("user:1:login_count", 0);
  await client.incr("user:1:login_count");
  await client.incr("user:1:login_count");
  console.log("Login Count ->", await client.get("user:1:login_count"));

  // INCRBY
  await client.incrby("user:1:login_count", 5);
  console.log("After INCRBY ->", await client.get("user:1:login_count"));

  // DECR
  await client.decr("user:1:login_count");
  console.log("After DECR ->", await client.get("user:1:login_count"));

  // APPEND
  await client.set("user:1:bio", "Hello");
  await client.append("user:1:bio", " I am learning Redis");
  console.log("Bio ->", await client.get("user:1:bio"));

  // STRLEN
  const length = await client.strlen("user:1:bio");
  console.log("Bio Length ->", length);

  // MSET
  await client.mset({
    "user:1:city": "Delhi",
    "user:1:country": "India",
  });

  // MGET
  const details = await client.mget("user:1:city", "user:1:country");
  console.log("Location ->", details);

  // SET with expiry (session example)
  await client.set("session:123", "active", "EX", 60);
  console.log("Session ->", await client.get("session:123"));
}

init();
