import { useState } from "react"
import { Component } from "react"


// REGLAS DE LOS HOOKS:
//  1. no dentro de un loop, ni condicion... ( ni for, ni if, ni for each...)
//      siempre en el nivel + alto del componente
//  2. Solo se llama en 2 parte:
//        a) componentes de react
//        b) custom hooks
//              ( cuando creemos un custom hooks use* )

// class App extends Component {
//   state = { contador: 0 }

//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 })
//   } 

//   render() {
//     return (
//       <div>
//         Contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     )
//   }
// }

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App