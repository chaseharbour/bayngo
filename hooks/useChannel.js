import Ably from "ably/promises";
import { configureAbly } from "@ably-labs/react-hooks";
import { useEffect } from "react";

const prefix = process.env.API_ROOT || "";

configureAbly({ authUrl: `${prefix}/api/ably/createTokenRequest` });
const ably = new Ably.Realtime.Promise({
  authUrl: `${prefix}/api/ably/createTokenRequest`,
});

export function useChannel(channelName, callbackOnBoardStateChange) {
  const channel = ably.channels.get(`play:${channelName}`);

  const subscribeOnMount = () => {
    channel.subscribe((state) => {
      callbackOnBoardStateChange(state);
    });
  };

  const unsubOnUnmount = () => {
    channel.unsubscribe();
  };

  const useEffectHandler = () => {
    subscribeOnMount();

    return () => unsubOnUnmount();
  };

  useEffect(useEffectHandler);

  return [channel, ably];
}
