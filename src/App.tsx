// import styles from "./App.module.css"

import Header from "./components/header/header"
import Catalog from "./components/catalog/catalog"
import AboutUs from "./components/aboutUs/aboutUs"
import ProductSelection from "./components/productSelection/productSelection"
import Team from "./components/team/team"
import Questions from "./components/questions/questions"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/footer/footer"


const App: React.FC = () => {
  return(
    <>
      <Header/>
      <Catalog/>
      <AboutUs/>
      <ProductSelection/>
      <Team/>
      <Questions/>
      <Contacts/>
      <Footer/>
    </>
  )
}


export default App
