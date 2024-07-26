import React from 'react'
import Quote from './components/Quote'

localStorage.setItem('project_selector', 'random-quote-machine')

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Quote />
        </div>
    )
}

export default App
