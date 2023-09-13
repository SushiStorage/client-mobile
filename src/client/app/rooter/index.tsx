import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Screens } from "./types";
import { RedirectionButtons } from "./redirectionButtons";
import { useSushiRetrieval } from "@sushi/view-models";
const { retrieveSushi } = useSushiRetrieval();

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const test = () => {
  retrieveSushi();
};

const Screen = (props: any) => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[styles.screen]}>
        <Text style={styles.text}>{props.text}</Text>
        <TouchableOpacity onPress={test}>
          <Text>hehe</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

function Rooter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens: Screens[] = [
    {
      title: "Screen 1",
      index: 0,
      element: () => <Screen text={"Screen 1"} index={0} />,
    },
    {
      title: "Screen 2",
      index: 1,
      element: () => <Screen text={"Screen 2"} index={1} />,
    },
    {
      title: "Screen 3",
      index: 2,
      element: () => <Screen text={"Screen 3"} index={2} />,
    },
  ];

  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          {
            useNativeDriver: false,
            listener: (event) => {
              const newIndex = Math.round(
                // @ts-ignore
                event.nativeEvent.contentOffset.x / SCREEN_WIDTH,
              );
              setCurrentIndex(newIndex);
            },
          },
        )}
        horizontal
        pagingEnabled
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // @ts-ignore
        contentOffset={{ x: currentIndex * SCREEN_WIDTH }}
      >
        {screens.map((screen) => (
          <View key={screen.index}>{screen.element()}</View>
        ))}
      </Animated.ScrollView>
      <RedirectionButtons
        screens={screens}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#00d4ff",
    height: "93%",
  },
  scrollPage: {
    width: SCREEN_WIDTH,
  },
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
  },
});

export { Rooter };
