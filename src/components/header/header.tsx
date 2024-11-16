import styles from "./header.module.css"


const Header: React.FC = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.name}>KixStore</div>

                <div className={styles.box}>
                    <div className={styles.boxHeader}>
                        <h1>KixStore</h1>

                        <div className={styles.headerMenu}>
                            <p className={styles.menuItem}>Каталог</p>
                            <p className={styles.menuItem}>О нас</p>
                            <p className={styles.menuItem}>Подбор товара</p>
                            <p className={styles.menuItem}>Наша команда</p>
                            <p className={styles.menuItem}>Доставка</p>
                            <p className={styles.menuItem}>Контакты</p>

                            <div className={styles.menuItem}>
                                <p className={styles.itemBasket}>Корзина <ion-icon name="cart"></ion-icon></p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boxMain}>
                        <div className={styles.mainTextH}>
                            <h1>Кроссовки известных брендов</h1> 
                            <h1>с доставкой по России и СНГ</h1>
                        </div>

                        <div className={styles.mainTextP}>
                            <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,</p>
                            <p>Converse и многие другие по низким ценам</p>
                        </div>

                        <button className={styles.mainBtn}>Перейти к покупкам</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;