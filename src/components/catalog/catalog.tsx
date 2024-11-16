import styles from "./catalog.module.css"

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { funM, funP } from "../../store/slice";


// import { Link } from "react-router-dom";


const Catalog: React.FC = () => {

    const count = useSelector((state: RootState) => state.cards.count)
    const dispatch = useDispatch()

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.boxFilter}>
                    <div className={styles.filter}>
                        <h1>{count}</h1>
                        <button onClick={() => dispatch(funP())}>click +</button>
                        <button onClick={() => dispatch(funM())}>click -</button>
                    </div>
                </div>
                
                <div className={styles.catalog}>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>

                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>

                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                </div>
                {/* <Link to="/FullCatalog">Full cataloge Page</Link> */}
            </div>
        </>
    )
}

export default Catalog;