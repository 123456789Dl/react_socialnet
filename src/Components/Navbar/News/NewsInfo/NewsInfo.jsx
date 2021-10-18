import React from "react";
import {onAddNewsActionCreator, onChangeNewsActionCreator} from "../../../redux/news-reducer";

export default function NewsInfo(props) {
    let onAddNews = () => {
        props.addNews()
    }
    let newNewsPostEvent = React.createRef();

    let onChangeNews = () => {
        let text = newNewsPostEvent.current.value;
        props.changeNews(text)
    }


    return (
        <div>
            <div>
                <textarea ref={newNewsPostEvent} value={props.newNewsText} onChange={onChangeNews}></textarea>
            </div>
            <div>
                <button onClick={props.addNews}>Add news</button>
            </div>
        </div>
    )
}