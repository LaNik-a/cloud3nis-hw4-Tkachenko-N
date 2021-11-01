import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationActions } from "react-navigation";
import {
  saveNotes,
  removeNote,
  loadNotes,
  editNote,
  setDetailNote,
} from "../actions";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
class Notes extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const {
      notes,
      onNoteEdit,
      onNoteRemove,
      onNotePress,
      onPressAddBtn,
      onSaveData,
      onLoadData,
    } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={styles.containerBtn}>
          <AntDesign
            style={styles.antBtn}
            name="pluscircleo"
            size={40}
            color="green"
            onPress={() => onPressAddBtn()}
          />
          <AntDesign
            style={styles.antBtn}
            name="download"
            size={40}
            color="blue"
            onPress={() => onLoadData()}
          />
          <AntDesign
            style={styles.antBtn}
            name="upload"
            size={40}
            color="red"
            onPress={() => onSaveData(notes)}
          />
        </View>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={styles.containerBtn2}>
              <AntDesign
                name="edit"
                size={30}
                color="green"
                onPress={() => onNoteEdit(item)}
              />
              <AntDesign
                style={styles.antBtn2}
                name="delete"
                color="red"
                size={30}
                onPress={() => onNoteRemove(item)}
              />
              <View>
                <TouchableOpacity
                  onPress={() => {
                    onNotePress(item);
                  }}
                >
                  <Image style={styles.image} source={{ uri: item.link }} />
                  <Text style={styles.name}> {item.name} </Text>
                  <Text style={styles.title}> {item.title} </Text>
                  <Text style={styles.anons}>{new Date(item.createdTime).toLocaleString()}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.content.notes.sort((a, b) => a.createdTime < b.createdTime),
});

const mapDispatchToProps = (dispatch) => ({
  onNoteEdit: (item) => {
    dispatch(editNote(item));
    dispatch(NavigationActions.navigate({ routeName: "editNote" }));
  },
  onNoteRemove: (item) => {
    dispatch(removeNote(item));
  },
  onNotePress: (item) => {
    dispatch(setDetailNote(item));
    dispatch(NavigationActions.navigate({ routeName: "noteDetail" }));
  },
  onPressAddBtn: () => {
    dispatch(NavigationActions.navigate({ routeName: "addNote" }));
  },
  onLoadData: () => {
    dispatch(loadNotes());
  },
  onSaveData: (notes) => {
    dispatch(saveNotes(notes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

const styles = StyleSheet.create({
  containerBtn: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 30,
  },
  containerBtn2: {
    marginVertical: 5,
    flexDirection: "column",
    marginLeft: 30,
  },
  antBtn: {
    marginLeft: 10,
  },
  antBtn2: {
    marginTop: 7,
  },
  name: {
    fontSize: 26,
    textAlign: "center",
    marginTop: 10,
    color: "#474747",
  },
  description: {
    fontSize: 26,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    color: "#474747",
  },
  anons: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
