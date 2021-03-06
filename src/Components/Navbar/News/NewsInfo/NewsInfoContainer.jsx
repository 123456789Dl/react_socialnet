import React from "react";
import {onAddNewsActionCreator, onChangeNewsActionCreator} from "../../../redux/news-reducer";
import {connect} from "react-redux";
import {onAddMessageActionCreator, onChangeMessageActionCreator} from "../../../redux/dialogs-reducer";
import NewsInfo from "./NewsInfo";

/*
export default function NewsInfo(props) {
    let addNews = () => {
        props.dispatch(onAddNewsActionCreator())
    }
    let newNewsPostEvent = React.createRef();

    let changeNews = () => {
        let text = newNewsPostEvent.current.value;
        props.dispatch(onChangeNewsActionCreator(text))
        console.log('its okay')
    }


    return (
        <div>
            <div>
                <textarea ref={newNewsPostEvent} value={props.newsPage.newNewsText} onChange={changeNews}></textarea>
            </div>
            <div>
                <button onClick={addNews}>Add news</button>
            </div>
        </div>
    )
}*/
let mapStateToProps = (state) => {
    return {
        newNewsText: state.newsPage.newNewsText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => dispatch(onAddNewsActionCreator()),
        changeNews: (text) => dispatch(onChangeNewsActionCreator(text))
    }
}
const NewsInfoContainer = connect(mapStateToProps, mapDispatchToProps)(NewsInfo)

export default NewsInfoContainer