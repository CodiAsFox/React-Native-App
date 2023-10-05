import { StyleSheet, View, Platform } from "react-native";
import { ListItem, Text } from "@ui-kitten/components";
import React from "react";

export default ListCard = ({ uuid, fName, lName, avatar }) => {
  const renderContent = () => (
    <View>
      <Text style={[cardStyles.firstName, cardStyles.text]}>{fName}</Text>
      <Text style={[cardStyles.lastName, cardStyles.text]}>{lName}</Text>
    </View>
  );

  const element = (
    <ListItem
      accessoryLeft={Platform.OS == "ios" ? renderContent : () => avatar}
      accessoryRight={Platform.OS == "android" ? renderContent : () => avatar}
    />
  );

  return element;
};

const cardStyles = StyleSheet.create({
  imageIcon: {
    borderRadius: 8,
    width: 64,
    height: 64,
  },
  text: {
    textAlign: Platform.OS == "ios" ? "left" : "right",
    color: Platform.OS == "ios" ? "#e1e2ef" : "#333",
  },
  firstName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  role: {
    marginBottom: 10,
    fontSize: 12,
    color: "#9396c1",
  },
  location: {
    fontSize: 12,
    color: "#9396c1",
  },
  cardBox: {
    marginLeft: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  backIcon: {
    width: 15,
    height: 23,
    right: 5,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#26273F",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    alignItems: "center",
  },
});
