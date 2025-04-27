import Noodjs, { RuntimeConfig } from "components/apps/NoodJs";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";
import { MessageEventHandler } from "hooks/usePostMessage";
import { useCallback, type FC } from "react";
// @ts-expect-error .raw is fine
import WorkerEnvSource from "./dist/dist-worker-env-bundle.js.raw";
import { HelloPortMessage, RpcMessage } from "./util";
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore

// TODO: make this configurable
// Cat Wallet acts as the host, which is checked by the file path
const OCAP_WALLET_PATH = "/Users/Public/Documents/Endo/Ocap Runtime/cat-wallet.ocaps";

// no SSR
let daemonWebWorker: Worker;
if (typeof window !== "undefined") {
  daemonWebWorker = new Worker(new URL("./daemon.ts", import.meta.url));
}

const Browser: FC<ComponentProcessProps> = (props) => {
  const { id } = props;
  const {
    processes: { [id]: process },
  } = useProcesses();
  const url = process?.url || "";

  const libs: string[] = [];
  const runtime = `${WorkerEnvSource}`;

  const runtimeConfig: RuntimeConfig = {
    libs,
    runtime,
  };

  const onMessage = useCallback<MessageEventHandler>(
    (event) => {
      if (typeof event.data !== "object") return;
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
      const message = event.data as RpcMessage;
      if (message.type === "HELLO_PORT") {
        const port = event.ports[0];
        const appId =
          url === OCAP_WALLET_PATH
            ? "HOST"
            : url;
        const helloPortMessage: HelloPortMessage = {
          type: "HELLO_PORT",
          params: {
            appId,
          },
        };
        daemonWebWorker.postMessage(helloPortMessage, [port]);
      }
    },
    [daemonWebWorker, url]
  );

  return (
    <Noodjs {...props} onMessage={onMessage} runtimeConfig={runtimeConfig} />
  );
};

export default Browser;
