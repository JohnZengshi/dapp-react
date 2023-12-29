/*
 * @LastEditors: John
 * @Date: 2023-12-29 15:33:02
 * @LastEditTime: 2023-12-29 18:15:16
 * @Author: John
 */
import "./styles/App.css";
import {
  useAccount,
  useConnect,
  useBalance,
  useNetwork,
  useDisconnect,
} from "wagmi";
import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { formatBalance } from "@/utils";

export default function App() {
  const connect = useConnect();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { chain, chains } = useNetwork();
  // const { data: balance } = useBalance({ address });
  const [balance, setBalance] = useState<string>("");
  const { open, close } = useWeb3Modal();
  // const connector = new MetaMaskConnector();
  // const connector = new InjectedConnector();
  // const connector = new WalletConnectConnector({
  //   options: { projectId: import.meta.env.VITE_PROJECT_ID || "" },
  // });

  const { disconnect } = useDisconnect();

  useEffect(() => {
    // connect({ connector: new MetaMaskConnector() });
  }, []);

  useEffect(() => {
    console.log(activeConnector);
  }, [activeConnector]);

  useEffect(() => {
    // console.log(chain);
  }, [chain]);

  useEffect(() => {
    // TODO 奇怪？activeConnector不是MetaMask?
    // console.log(connector);
    // connector.getProvider().then((p) => {
    //   if (address) {
    //     p?.request({
    //       method: "eth_getBalance",
    //       params: [address, "latest"],
    //     }).then((b: any) => {
    //       setBalance(formatBalance(b));
    //     });
    //   }
    // });
  }, [address]);

  return (
    <>
      <div className="App">
        {!isConnected && (
          <>
            <Button
              className="mt-5"
              onClick={() => {
                open({ view: "Connect" });
              }}
            >
              Connect Wallet
            </Button>
          </>
        )}

        {isConnected && (
          <div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">钱包信息：</p>
            <Separator className="my-4" />

            <div className="w-full flex h-5 items-center text-sm my-2">
              <div>Wallet Accounts: </div>
              <Separator className="mx-2" orientation="vertical" />
              <div className="ml-auto"> {address}</div>
            </div>

            <div className="w-full flex h-5 items-center text-sm my-2">
              <div>Wallet Balance:</div>
              <Separator className="mx-2" orientation="vertical" />
              <div className="ml-auto">{balance} </div>
            </div>

            <div className="w-full flex h-5 items-center text-sm my-2">
              <div>Hex ChainId:</div>
              <Separator className="mx-2" orientation="vertical" />
              <div className="ml-auto"> {chain?.id}</div>
            </div>

            <Button
              className="mt-5"
              onClick={() => {
                disconnect();
              }}
            >
              DisConnect Wallet
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
