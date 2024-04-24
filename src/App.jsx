
import './App.css'
import Evento from './components/event'
import Form from './components/form'
import HelloWord from './components/helloWord'
import SayMyName from './components/sayMyName'
import Pessoa from './components/pessoa'
import Frase from './components/frase'
import List from './components/list'
function App() {

  const nome = "Tulio"

  return (
    <div className='App'>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
      {/* <Frase/>
      <SayMyName nome="Douglas"/>
      <SayMyName nome="Roberto"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Douglas" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
      />

      <List/> */}
      
    </div>
    
  
  )
}

export default App
