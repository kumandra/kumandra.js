# Node js example.

This example uses kumandra.js to:

- Load Identity.

  - Create an `Identity` from a sample account.
  - Generate a `KumandraClient` and load the `Identity` from the sample account.
  - Connects to the Kumandra network.

- Put Object:

  - Load a sample `Object` data as an array of bytes.
  - Send the `Object` to the network calling `putObject`.
  - Receives the `objectId` from the previous call.

- Get Object:

  - Send the `objectId` to the network calling `getObject`.
  - Receives the `Object` from the previous call.
    _Note, the call will return `object not found` until the next block archive process runs. It could take some minutes to get the object from the store._
- Write the file to disk `sample-from-objectStore.jpg`.

# Install

Install dependencies:

`npm ci`

# Build

Generate the build in `dist` folder.:

`npm run build`

# Run

Run the example:

`npm run start`

## Connecting to the network

You can edit the `./scr/index.ts` file to configure the providers endoints.

```
const NODE_WS_PROVIDER = 'ws://localhost:9944'
const FARMER_WS_PROVIDER = 'ws://localhost:9944'
```

Or you can connect to the public test network.

```
const NODE_WS_PROVIDER = 'wss://rpc.kumadra.network'
const FARMER_WS_PROVIDER = 'wss://rpc.kumandra.network/farmer-rpc'
```
