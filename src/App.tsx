import './App.css'
import { ProjectProvider } from './context/project/ProjectProvider'
import { UIProvider } from './context/ui/UIProvider'
import Dashboard from './pages/Dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <UIProvider>
      <ProjectProvider>
        <Dashboard />
      </ProjectProvider>
    </UIProvider>
  )
}

export default App
