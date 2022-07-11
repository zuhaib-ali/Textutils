import React, {useState} from 'react'

const operatonButtonStyle = {
    margin:"0px 3px"
}

export default function TextForm(props) {
    const [text, setText] = useState("");

    function textFormHandler(event){
        setText(event.target.value);
    }

    function copyHandler(){
        let para = document.getElementById("paragraph");
        let selected_text = para.value.slice(para.selectionStart, para.selectionEnd);
        if(selected_text === "" || selected_text === undefined){
            selected_text = para.select();
        }
        navigator.clipboard.writeText(selected_text);
    }

    // TEXT UPPER CASE
    function uppercaseHandler(){
        let textarea_tag = document.getElementById("paragraph");
        let start_index = textarea_tag.selectionStart;
        let end_index = textarea_tag.selectionEnd;
        let selected_string = textarea_tag.value.slice(start_index, end_index);
        let start_content = textarea_tag.value.substr(0, start_index);
        let end_content = textarea_tag.value.substr(end_index, textarea_tag.value.length);
        setText(start_content+selected_string.toUpperCase()+end_content);
    }

    // TEXT LOWER CASE
    function lowwercaseHandler(){
        let textarea_tag = document.getElementById("paragraph");
        let start_index = textarea_tag.selectionStart;
        let end_index = textarea_tag.selectionEnd;
        let selected_string = textarea_tag.value.slice(start_index, end_index);
        let start_content = textarea_tag.value.substr(0, start_index);
        let end_content = textarea_tag.value.substr(end_index, textarea_tag.value.length);
        setText(start_content+selected_string.toLowerCase()+end_content);
    }

    // REMOVE EXTRA WHITE SPACES
    function extraSpacesRemoveHandler(){
        setText(text.split(/[ ]+/).join(" "));
    }

    function clearTextHandler(){
        setText("");
    }

    // LIGTH / DARK MODE
    const [mode, setMode] = useState({
        color:"black",
        backgroundColor:"white",
    });
    function toggleModeHandler(){
        if(mode.color === "white"){
            setMode({
                color:"black",
                backgroundColor:"white",
            });

        }else{
            setMode({
                color:"white",
                backgroundColor:"black",
            });
        }
        
    }

    return (
        <div className="container mt-5 p-5" style={mode}>
            {/* TEXT AREA */}
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{props.formHeading}</label>
                <textarea style={mode} className="form-control" value={text} id="paragraph" rows="3" onChange={textFormHandler}></textarea>
                <br />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    {/* OPERATIONS */}
                    <div>
                        <button className="btn btn-secondary btn-sm" onClick={copyHandler} style={operatonButtonStyle}>Copy</button>
                        <button className="btn btn-primary btn-sm" onClick={uppercaseHandler} style={operatonButtonStyle}>UPPER</button>
                        <button className="btn btn-primary btn-sm" onClick={lowwercaseHandler} style={operatonButtonStyle}>lower</button>
                        <button className="btn btn-warning btn-sm" onClick={extraSpacesRemoveHandler} style={operatonButtonStyle}>Remove Extra Spaces</button>
                        <button className="btn btn-dark btn-sm" onClick={toggleModeHandler} style={operatonButtonStyle}>{mode.color === "white" ? "Light" : "Dark"}</button>
                        <button className="btn btn-danger btn-sm" onClick={clearTextHandler} style={operatonButtonStyle}>Clear</button>
                    </div>

                    {/* TEXT DETAILS */}
                    <div className="details">
                        <span><i>WORDS</i> : <b>{text.length}</b>, </span>
                        <span><i>Characters</i> : <b>{text.split(" ").length}</b></span>
                    </div>
                </div>
                
            </div>

            
            
            <br />
            <br />

            {/* PREVIEW */}
            <div style={{border:"1px solid lightgrey", padding:'20px'}}>
                <h2>Preview</h2>
                <hr />
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
