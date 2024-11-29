import styles from "./stage2.module.css"

import { ReactNode } from "react";


const Stage2: React.FC<{children: ReactNode}> = ({ children }) => {
    return(
        <>
            <div className={styles.header}>
                <h2>Мы подберем идеальную пару для вас</h2>
                <h4>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</h4>
            </div>

            <div className={styles.main}>
                <h3>Уточните какие-либо моменты</h3>

                <textarea placeholder="Введите сообщение"></textarea>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <h3>2 из 3</h3>
                    {children}
                </div>
            </div>  
        </>
    )
}

export default Stage2;