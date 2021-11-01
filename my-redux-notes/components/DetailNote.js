import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { connect } from "react-redux";

class NoteDetail extends Component {
  render() {
    const { note } = this.props;
    return (
      <View style={styles.main}>
        <Image
          style={styles.image}
          source={{
            uri: note.link,
          }}
        />
        <Text style={styles.header}>{note.name}</Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.desc}>{note.description}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  note: state.detail.note,
});

export default connect(mapStateToProps)(NoteDetail);
const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    color: "#474747",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
  },
  image: {
    width: "100%",
    height: 200,
  },
  main: {
    padding: 20,
    paddingEnd: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});