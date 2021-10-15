import { useRef } from "react"

const App = () => {
    const ref = useRef()
    const inputRef = useRef()
    const click = () => console.log(ref.current.clientHeight)
    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>

            <div onClick={click} ref={ref}>lala</div>
        
            <input ref={inputRef}/>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default App