import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Props } from "./types";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

function RedirectionButtons(props: Props) {
  const goToScreen = (index: number) => {
    if (index >= 0 && index <= props.screens.length - 1) {
      props.setCurrentIndex(index);
      xOffset.setValue(index * SCREEN_WIDTH);
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonContainerTwo}>
        {props.screens.map((screen) => (
          <TouchableOpacity
            key={screen.index}
            onPress={() => goToScreen(screen.index)}
            style={styles.button}
          >
            <Text
              style={
                props.currentIndex === screen.index
                  ? styles.selectedTitle
                  : styles.title
              }
            >
              {screen.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "7%",
    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainerTwo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 100,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  title: {
    color: "white",
  },
  selectedTitle: {
    color: "red",
  },
});

export { RedirectionButtons };
