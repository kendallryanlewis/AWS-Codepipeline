import React, { Component } from "react";
import FlipMove from "react-flip-move";

class NoteItems extends Component {
    constructor(props){
        super(props);

        this.createNotes = this.createNotes.bind(this);
    }

    createNotes(item) {
        return <li onClick= {() => this.delete(item.key)}
            key={item.key}> {item.text}</li>
    } 

    delete(key){
        this.props.delete(key);
    }

    render() {
        var noreEnteries = this.props.entries;
        var listIems = noreEnteries.map(this.createNotes);

        return (
            <ul className="theList">
                <FlipMove duration ={250} easing="ease-out">
                    {listIems}
                </FlipMove>
            </ul>
        );
    }
}

export default NoteItems;