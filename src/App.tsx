import styles from "./App.module.css"

import Header from "./components/header/header"
import Catalog from "./components/catalog/catalog"


const App: React.FC = () => {
  return(
    <>
      <Header/>
      <Catalog/>
      <div className={styles.marginBottom}></div>
    </>
  )
}

// в проектк используется:
// react-router-dom
// Redux


export default App
