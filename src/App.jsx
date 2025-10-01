import EstouComSono from "./components/EstouComSono"
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact"

function App() {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={true}/>
      <EstouComSono comSono={true} />
    </div>
  )
}

export default App
