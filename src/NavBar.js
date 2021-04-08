import React from "react"
import TimeTravelButtons from "./TimeTravelButtons";

const NavBar = function (props) {
    return (
        <nav className="nav nav-fill quixx-nav bg-quixx-orange">
            <h1 className="nav-title">Quixx</h1>
            <TimeTravelButtons
                canUndo={props.canUndo}
                canRedo={props.canRedo}
                handleUndoButtonClick={props.handleUndoButtonClick}
                handleRedoButtonClick={props.handleRedoButtonClick}/>
        </nav>
    )
}

export default NavBar