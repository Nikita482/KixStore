import styles from "./aboutUs.module.css"


const AboutUs: React.FC = () => {
    return(
        <>
            <div id="aboutUs" className={styles.wrapper}>
                <div className={styles.margin}>
                    <div className={styles.text}>
                        <div className={styles.wrapperInfo}>
                            <h2>Пару слов о нас</h2>
                            <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.</p>
                        </div>
                    </div>
                    
                    <div className={styles.foto}></div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;