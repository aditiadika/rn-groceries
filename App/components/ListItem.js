import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: { fontSize: 18, color: "#696969" },
  icon: {
    height: 30,
    tintColor: "#696969"
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});

export const Separator = () => <View style={styles.separator} />;

const ListItem = ({ name, onFavouritePress, isFavourite }) => {
  let starIcon;

  if (isFavourite) {
    starIcon = Platform.select({
      ios: require("../assets/icons/ios-star.png"),
      android: require("../assets/icons/md-star.png")
    });
  } else {
    starIcon = Platform.select({
      ios: require("../assets/icons/ios-star-outline.png"),
      android: require("../assets/icons/md-star-outline.png")
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      {onFavouritePress && (
        <TouchableOpacity onPress={onFavouritePress}>
          <Image source={starIcon} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListItem;
