/*
 * @LastEditors: John
 * @Date: 2023-12-29 15:33:02
 * @LastEditTime: 2023-12-29 16:51:07
 * @Author: John
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";
import "../app/globals.css";

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = import.meta.env.VITE_PROJECT_ID || "";

const metadata = {
  name: "React Starter Template",
  description: "A React starter template with Web3Modal v3 + Wagmi",
  url: window.location.host,
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
