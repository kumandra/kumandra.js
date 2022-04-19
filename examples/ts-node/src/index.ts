import * as readline from 'readline';

import { KumandraClient, Identity } from "@kumandra/kumandra";
import { promises as fs } from "fs";

const NODE_WS_PROVIDER = "ws://localhost:9944";
const FARMER_WS_PROVIDER = "ws://localhost:9955";
const suri = "//Alice";

// const data = await fs.readFile("./sample-input.jpg");
// const objectData = new Uint8Array(data);

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });

rl.question(`Please input your file, you want to upload. `, async upload_data => {
  console.log(`Hello, File you want to upload is ${upload_data}!`)
  const data = await fs.readFile(upload_data)
  const objectData = new Uint8Array(data);


  // Generate an Identity, we create from a random account for this example.
  const identity = await Identity.fromUri(suri);
  
  // Generate a KumandraClient and connect to node and farmer rpc endpoints.
  const kumandraClient = await KumandraClient.connect(
    identity,
    NODE_WS_PROVIDER,
    FARMER_WS_PROVIDER
  );
  
  // Put the file as (Uint8Array) in to the objectStore and return the objectId
  const objectId: string = await kumandraClient.putObject(objectData);
  console.log("objectId", objectId);
  
  // Using the objectId get the file as (Uint8Array) from the objectStore.
  // const object: Uint8Array = await kumandraClient.getObject(objectId);
  
  // Write the file as a copy from the original
  // await fs.writeFile(data, object, {});
//   console.log("writeFile ${data}");
  // console.log(data);
    rl.close()
})

