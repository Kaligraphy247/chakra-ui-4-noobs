import './App.css'
import { Box, Stack, HStack, VStack, Text, Heading, Button } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'


function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  )
}

export default App
