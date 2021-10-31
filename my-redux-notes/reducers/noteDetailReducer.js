import {SET_DETAIL_NOTE} from '../actions';

const defaultState = {
    note: {
        name: "Купить молоко",
        title: "Завтра утром сходить в магазин",
        description: "Купить молоко 2%, и не забудь посмотреть на дату!!!",
        link: "https://img2.goodfon.ru/original/1600x900/4/aa/yagoda-klubnika-makro-derevo.jpg",
        key: "1"
    }
};


const noteDetail = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DETAIL_NOTE: {
            return {note: action.payload};
        }
        default:
            return state;
    }
}

export default noteDetail;
