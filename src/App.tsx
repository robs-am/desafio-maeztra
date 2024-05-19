import Header from './components/Header/Header'
import EmblaCarousel from './components/Banner/EmblaCarousel'
import TipBar from './components/TipBar/TipBar'
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'




function App() {


  return (
    <>
      <Header />
      <div className="mb-6">
        <EmblaCarousel />
      </div>
      <div className="mb-20">
        <TipBar />
      </div>
      <div className="mb-20">
        <Brands />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
