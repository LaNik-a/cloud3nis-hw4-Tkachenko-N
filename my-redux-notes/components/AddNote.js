import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Formik, Field } from "formik";
import MyInput from "./MyInput";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { NavigationActions } from "react-navigation";

class AddNote extends Component {
  render() {
    return (
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Formik 
          initialValues={{ name: "", title: "", description: "", link: "" }}
          onSubmit={(values) => {
            let note = {
              name: values.name,
              title: values.title,
              description: values.description,
              link: values.link,
              createdTime: Date.now(),
              key: Math.random().toString(),
            };
            this.props.onAddNote(note);
          }}
        >
          {({ handleSubmit }) => (
            <View>
              <Field
                style={styles.field}
                component={MyInput}
                name="link"
                placeholder="Ссылка на фото"
              />
              <Field
                style={styles.field}
                component={MyInput}
                name="name"
                placeholder="Название"
              />
              <Field
                style={styles.field}
                component={MyInput}
                name="title"
                placeholder="Краткое описание"
              />
              <Field
                style={styles.field}
                component={MyInput}
                name="description"
                placeholder="Описание"
              />
              <Button title="Добавить" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddNote: (item) => {
    dispatch(addNote(item));
    dispatch(NavigationActions.back());
  },
});

const styles = StyleSheet.create({
  field: {
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
