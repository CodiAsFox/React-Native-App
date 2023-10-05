import AnimationPlayer from "../components/AnimationPlayer";
import { Divider, Layout } from "@ui-kitten/components";
import ErrorMessage from "../components/ErrorMessage";
import { FlatList, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import ListCard from "../components/ListCard";

export default function UserFetch(
  count,
  userData,
  setDisableBtn,
  setPageContent,
  setUserData,
  setInitApp,
  clearList = false
) {
  setPageContent(
    <Layout level={"2"} style={styles.appView}>
      <AnimationPlayer type={"loading"} />
    </Layout>
  );
  const listData = [];
  let appData;
  setDisableBtn(true);
  const apiURL = `https://random-data-api.com/api/v2/users/?size=${count}&id`;
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data = !Array.isArray(data) ? [data] : data;

      data.map((user) => {
        const avatarFix = `https://robohash.org/${user.id}?set=set1&size=100x100`;
        listData.push(
          <ListCard
            uuid={user.id}
            fName={user.first_name}
            lName={user.last_name}
            avatar={
              <UserAvatar
                size={70}
                name={`${user.first_name}${user.last_name}`}
                src={avatarFix}
              />
            }
          />
        );

        return listData;
      });

      if (!clearList && userData) {
        appData = [...listData, ...userData];
      } else {
        appData = listData;
      }

      setUserData(appData);

      setPageContent(
        <FlatList
          data={appData}
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => item}
        />
      );

      setDisableBtn(false);
    })
    .catch((error) => {
      setDisableBtn(true);
      setPageContent(<ErrorMessage error={error} setInitApp={setInitApp} />);
    });
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
