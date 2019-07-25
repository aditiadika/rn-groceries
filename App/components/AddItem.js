import React, { useRef } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 18,
    borderRadius: 3
  },
  container: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});

const AddItem = ({ onSubmitEditing, style, ...rest }) => {
  const input = useRef(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder="Add item..."
        ref={input}
        onSubmitEditing={evt => {
          if (onSubmitEditing) {
            onSubmitEditing(evt);
          }

          input.current.clear();
        }}
        {...rest}
      />
    </View>
  );
};

export default AddItem;
