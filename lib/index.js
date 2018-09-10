import { Dharma, Web3 } from "@dharmaprotocol/dharma.js";

const host = "http://localhost:8545";
const provider = new Web3.providers.HttpProvider(host);
const dharma = new Dharma(provider);
