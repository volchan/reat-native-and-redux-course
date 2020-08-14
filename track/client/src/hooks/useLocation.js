import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { log } from "react-native-reanimated";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      setSubscriber(
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (location) => {
            callback(location);
          }
        )
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) startWatching();
    return () => {
      if (subscriber) {
        subscriber.remove();
        setSubscriber(null);
      }
    }
  }, [shouldTrack, callback]);

  return [err];
};
