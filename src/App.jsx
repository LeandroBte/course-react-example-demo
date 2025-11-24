import './App.css'
import Menu from './components/Menu'
import Counter from './components/Counter'
import Listado from './components/Listado'
// import UsersApp from './components/UsersApp'
import FormCustom from './components/FormCustom'
import UsersComponent from './components/UsersComponent'
// import CalculateMemo from './components/CalculateMemo'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <Menu />
      <Counter /> 
      <Listado />
      {/* <UsersApp /> */}
      <FormCustom />
      <UsersComponent />
      {/* <CalculateMemo /> */}
      <TaskList />
    </>
  )
}

export default App
