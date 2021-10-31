import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { NavigationActions } from "react-navigation";
import {
  addNote,
  setNotes,
  saveNotes,
  removeNote,
  loadNotes,
  editNote,
  setDetailNote,
} from "../actions";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
class Notes extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const {
      notes,
      isLoadData,
      onNotePress,
      onMenuSelected,
      onPressAddBtn,
      onSaveData,
    } = this.props;

    if (isLoadData) {
      onSaveData(notes);
    }

    return (
      <View style={styles.container}>
        <div>
          <AntDesign
            name="pluscircleo"
            size={40}
            color="green"
            onPress={() => onPressAddBtn()}
          />
          <AntDesign name="download" marginLeft={30} size={40} color="blue" />
          <AntDesign name="upload" size={40} color="red" />
        </div>

        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View>
              <div>
                <AntDesign name="edit" size={24} color="black" />
                <AntDesign name="delete" size={24} color="black" />
              </div>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    onNotePress(item);
                  }}
                >
                  <Image style={styles.image} source={{ uri: item.link }} />
                  <Text style={styles.name}> {item.name} </Text>
                  <Text style={styles.title}> {item.title} </Text>
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
  notes: state.content.notes,
});

const mapDispatchToProps = (dispatch) => ({
  onMenuSelected: (menuId, item) => {
    switch (menuId) {
      case EDIT:
        {
          dispatch(setEditNote(item));
          dispatch(NavigationActions.navigate({ routeName: "editNote" }));
        }
        break;
      case REMOVE:
        dispatch(removeNote(item));
        break;
    }
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
  btn_group_button: {
    backgroundColor: "green" /* Green background */,
    color: "white" /* White text */,
    paddingTop: 10,
    paddingLeft: 24 /* Some padding */,
    cursor: "pointer",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuContent: {
    marginLeft: 5,
    fontSize: 16,
    color: "#000",
  },
  item: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,

    backgroundColor: "white",
    margin: 15,
    elevation: 10,
  },
  name: {
    fontSize: 22,
    textAlign: "center",
    color: "#111111",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#111111",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    margin: 5,
    color: "#111111",
  },
  image: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,

    resizeMode: "cover",
    marginBottom: 10,
    width: "100%",
    height: 220,
  },
  setting: {
    right: "-43%",
    marginTop: 5,
    marginBottom: 10,
  },

  setting_row: {
    width: "100%",
    flexDirection: "row",
  },
});
