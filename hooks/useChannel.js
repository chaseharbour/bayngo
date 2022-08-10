import Ably from "ably/promises";
import { useEffect } from "react";

const prefix = process.env.API_ROOT || "";

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
