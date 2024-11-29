import styles from "./stage4.module.css"


const Stage4: React.FC = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <ion-icon name="checkmark"></ion-icon>
                <h1>Отправлено</h1>
            </div>
        </>
    )
}

export default Stage4;