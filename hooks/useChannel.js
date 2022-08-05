import Ably from "ably/promises";
import { useEffect } from "react";

const ably = new Ably.Realtime.Promise({
  authUrl: "/api/ably/createTokenRequest",
});

export function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName);

  const subscribeOnMount = () => {
    channel.subscribe((msg) => {
      callbackOnMessage(msg);
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
