import { Button, Layout, TopNavigation, useTheme } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import UserFetch from "../utils/UserFetch";
import { StyleSheet } from "react-native";

export default function HomePage() {
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const [disableBtn, setDisableBtn] = useState(true);
  const [pageComponent, setPageContent] = useState(null);
  const [initApp, setInitApp] = useState(null);
  const [userData, setUserData] = useState();

  const PageContent = ({ component }) => {
    return component;
  };

  useEffect(() => {
    UserFetch(
      10,
      userData,
      setDisableBtn,
      setPageContent,
      setUserData,
      setInitApp
    );
  }, [initApp]);

  return (
    <Layout
      level="1"
      style={{
        backgroundColor: theme["color-primary-500"],
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
      }}
    >
      <TopNavigation
        title="Single Randos in You Area™"
        style={{ backgroundColor: theme["color-primary-500"] }}
        alignment="center"
      />
      <Layout level={"2"} style={styles.appView}>
        <PageContent component={pageComponent} />
      </Layout>
      <Button
        style={[
          styles.btnPlus,
          {
            shadowColor: theme["color-primary-300"],
          },
        ]}
        appearance="filled"
        status="info"
        onPress={() => {
          UserFetch(
            1,
            userData,
            setDisableBtn,
            setPageContent,
            setUserData,
            setInitApp
          );
        }}
        accessible={true}
        accessibilityLabel="Add one more rando!"
        disabled={disableBtn}
      >
        <>
          <FontAwesome name="plus" size={20} style={styles.icon} />
        </>
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  btnPlus: {
    position: "absolute",
    bottom: 50,
    right: 15,
    width: 55,
    height: 55,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    color: "white",
  },
  text: {
    paddingTop: 15,
  },
});
