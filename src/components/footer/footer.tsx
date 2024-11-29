import styles from "./footer.module.css"


const Footer: React.FC = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.margin}>
                    <h1 className={styles.name}>KixStore</h1>

                    <div className={styles.items}>
                        <h4 className={styles.item}><a href="#catalog">Каталог</a></h4>
                        <h4 className={styles.item}><a href="#aboutUs">О нас</a></h4>
                        <h4 className={styles.item}><a href="#productSelection">Подбор товара</a></h4>
                        <h4 className={styles.item}><a href="#team">Наша команда</a></h4>
                        <h4 className={styles.item}><a href="#questions">Вопросы</a></h4>
                        <h4 className={styles.item}><a href="#contacts">Контакты</a></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;