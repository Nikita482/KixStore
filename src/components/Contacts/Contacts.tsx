import styles from "./Contacts.module.css"


const Contacts: React.FC = () => {
    return(
        <>
            <div id="contacts" className={styles.wrapper}>
                <div className={styles.margin}>
                    <div className={styles.info}>
                        <h1>Контакты</h1>

                        <div className={styles.marginBlock}>
                            <p>Главный офис</p>
                            <h2 className={styles.marginNum}>+7 800 789 89 89</h2>
                            <h4>г. Санкт-Петербург, Комсомольская, 43 к1</h4>
                        </div>

                        <div className={styles.marginBlock}>
                            <p>отдел продаж</p>
                            <h2 className={styles.marginNum}>+7 800 789 89 89</h2>
                            <h4>г. Санкт-Петербург, Комсомольская, 43 к1</h4>
                        </div>

                        <div className={styles.socialLinks}>
                            <div className={styles.vk}><ion-icon name="logo-vk"></ion-icon></div>
                            <div className={styles.inst}><ion-icon name="logo-instagram"></ion-icon></div>
                        </div>
                    </div>

                    <div className={styles.foto}></div>
                </div>
            </div>
        </>
    )
}

export default Contacts;