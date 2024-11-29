import { ReactNode } from "react";
import styles from "./stage3.module.css"


const Stage3: React.FC<{children: ReactNode}> = ({children}) => {
    return(
        <>
            <div className={styles.header}>
                <h2>Ваша подборка готова!</h2>
                <h4>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</h4>
            </div>

            <div className={styles.main}>
                <div className={styles.mainGetInfo}>
                    <h1>Получить предложение</h1>

                    <h3>Получите подборку подходящих для вас моделей на почту</h3>

                    <div className={styles.infoPole}>
                        <input type="text" placeholder="Ваше имя" className={styles.poleName} />

                        <input type="email" placeholder="E-mail" className={styles.poleEmail} />

                        {children}
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <h3>3 из 3</h3>
                </div>
            </div>  
        </>
    )
}

export default Stage3;