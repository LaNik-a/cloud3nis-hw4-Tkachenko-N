import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Field, Formik } from "formik";
import MyInput from "./MyInput";
import { connect } from "react-redux";
import { editNote } from "../actions";
import { NavigationActions } from "react-navigation";

class EditNote extends Component {
  render() {
    const { note, onEditNote } = this.props;
    return (
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Formik
          initialValues={{
            name: note.name,
            title: note.title,
            description: note.description,
          }}
          onSubmit={(values) => {
            note.name = values.name;
            note.title = values.title;
            note.description = values.description;
            note.createdTime = Date.now();
            onEditNote(note);
          }}
        >
          {({ handleSubmit }) => (
            <View>
              <Field
                style={styles.field}
                name="name"
                component={MyInput}
                placeholder="Название"
              />
              <Field
                style={styles.field}
                name="title"
                component={MyInput}
                placeholder="Краткое описание"
              />
              <Field
                style={styles.field}
                component={MyInput}
                name="description"
                placeholder="Описание"
              />
              <Button
                title="Изменить"
                style={styles.field}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  note: state.edit.note,
});

const mapDispatchToProps = (dispatch) => ({
  onEditNote: (item) => {
    dispatch(editNote(item));
    dispatch(NavigationActions.back());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);

const styles = StyleSheet.create({
  field: {
    paddingVertical: 10,
    textAlign: "center",
  },
});