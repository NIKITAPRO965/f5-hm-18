import { useRef } from "react"

function InputFocus(){
    const inputRef = useRef(null)


    const handleBtnClick = ()=> {
        inputRef.current.focus()
        console.log(inputRef.current);
        
    }

    return(<>
    <div style={{display: "flex", justifyContent: "center"}}>
    <input ref={inputRef} type="text" placeholder="click on button"/>
    <button onClick={handleBtnClick} type="button">focus-input</button>

    </div>
    </>)
}

export default InputFocus