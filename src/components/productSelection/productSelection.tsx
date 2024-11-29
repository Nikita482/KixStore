import styles from "./productSelection.module.css"
import gsap from "gsap"

import Stage1 from "./stages/stage1/stage1"
import Stage2 from "./stages/stage2/stage2"
import Stage3 from "./stages/stage3/stage3"
import Stage4 from "./stages/stage4/stage4"


const ProductSelection: React.FC = () => {

    const further1 = () => {
        gsap.to("#Stage1", {marginLeft: "-100%", duration: 1.5, display: "none", opacity: 0})
        gsap.to("#Stage2", {display: "flex", opacity: 1, delay: 1.5, margin: "30px auto"})
    }

    const further2 = () => {
        gsap.to("#Stage2", {marginLeft: "-100%", duration: 1.5, display: "none", opacity: 0})
        gsap.to("#Stage3", {display: "flex", opacity: 1, delay: 1.5, margin: "30px auto"})
    }

    const further3 = () => {
        gsap.to("#Stage3", {marginLeft: "-100%", duration: 1.5, display: "none", opacity: 0})
        gsap.to("#Stage4", {display: "flex", opacity: 1, delay: 1.5})
        gsap.to("#Stage4", {opacity: 0, display: "none", delay: 5})
        gsap.to("#Stage1", {margin: "30px auto", display: "flex", duration: 1.5, opacity: 1, delay: 6})
    }

    return(
        <>
            <div id="productSelection" className={styles.wrapper}>
                <div id="Stage1" className={styles.wrapperStage1}>
                    <Stage1>
                        <button onClick={further1}>Следующий шаг</button>
                    </Stage1>
                </div>

                <div id="Stage2" className={styles.wrapperStage2}>
                    <Stage2>
                        <button onClick={further2}>Следующий шаг</button>
                    </Stage2>
                </div>

                <div id="Stage3" className={styles.wrapperStage3}>
                    <Stage3>
                        <button onClick={further3}>Получить</button>
                    </Stage3>
                </div>

                <div id="Stage4" className={styles.wrapperStage4}>
                    <Stage4 />
                </div>
            </div>
            
        </>
    )
}

export default ProductSelection;