import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import AnimationPlayer from "./AnimationPlayer";
import { FontAwesome } from "@expo/vector-icons";

export default function ErrorMessage({ error, setInitApp }) {
  return (
    <Layout level={"2"} style={styles.appView}>
      <AnimationPlayer type="network-error" />
      <Text category="h1" status="danger">
        Network error
      </Text>
      <Text style={styles.text}>
        Please check your internet connection and try again.
      </Text>
      <Text style={styles.text} appearance="hint" status="warning">
        [{error.message}]
      </Text>
      <Button
        style={[styles.btnRetry]}
        appearance="filled"
        status="control"
        onPress={() => setInitApp(Math.floor(Math.random() * 11))}
        accessible={true}
        accessoryLeft={() => <FontAwesome name="repeat" size={20} />}
      >
        <Text>Retry</Text>
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnRetry: {
    marginTop: 25,
  },
  text: {
    paddingTop: 15,
  },
});
