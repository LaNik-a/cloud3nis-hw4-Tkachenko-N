import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { createReduxContainer } from "react-navigation-redux-helpers";

import Notes from "./components/Notes";
import DetailNote from "./components/DetailNote";
import EditNote from "./components/EditNote";
import AddNote from "./components/AddNote";

const RouterConfigs = {
  notes: {
    screen: Notes,
    navigationOptions: {
      title: "Список заметок",
    },
  },
  noteDetail: {
    screen: DetailNote,
    navigationOptions: {
      title: "Выбранная заметка",
    },
  },
  editNote: {
    screen: EditNote,
    navigationOptions: {
      title: "Редактирование заметки",
    },
  },
  addNote: {
    screen: AddNote,
    navigationOptions: {
      title: "Добавление заметки",
    },
  },
};

export const Router = createStackNavigator(RouterConfigs, {
  initialRouteName: "notes",
});

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppContainer = createReduxContainer(Router);
export const AppWithNavigationState = connect(mapStateToProps)(AppContainer);
