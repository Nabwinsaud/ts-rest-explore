// client.ts

import { initClient } from "@ts-rest/core";
import { contract } from "../contract";

const client = initClient(contract, {
  baseUrl: "http://localhost:3333",
  baseHeaders: {},
});

(async () => {
  const post = (await client.getPosts()).body;

  const user = await (await client.getDrizzle()).body;
  console.log("client is ", post, user);
})();
