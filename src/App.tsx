import './App.css'
import ReactFlowComp from './ReactFlow'

function App() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold text-center'>Stripe Checkout Flow</h1>
      <ReactFlowComp />
    </main>
  )
}

export default App
