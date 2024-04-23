
import './App.css'
import HelloWord from './components/helloWord'
function App() {

  const name = "Douglas"

  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <>
    <div className='App'>
      <HelloWord/>
      <h1>Alterando o JSX</h1>
      <p>Ola, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
    
    </>
  )
}

export default App
