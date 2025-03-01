
import './App.css'
import Banner from './Banner'
import Button from './Button'
import Footer from './Footer'
import Marque from './Marque'
import Partnership from './Partnership'
import Search from './Search'
import Table from './Table'

function App() {

  return (
    <>
      <div className='overflow-clip'>
        <Banner></Banner>
        <Button></Button>
        <Marque></Marque>
        <Table></Table>
        <Search></Search>
        <Partnership></Partnership>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
