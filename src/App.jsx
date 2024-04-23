
import './App.css'
import HelloWord from './components/helloWord'
import SayMyName from './components/sayMyName'
import Pessoa from './components/pessoa'
import Frase from './components/frase'
function App() {

  const nome = "Tulio"

  return (
    <div className='App'>
      <HelloWord/>
      <Frase/>
      <SayMyName nome="Douglas"/>
      <SayMyName nome="Roberto"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Douglas" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
      />
      
    </div>
    
  
  )
}

export default App
