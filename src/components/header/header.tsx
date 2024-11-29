import styles from "./header.module.css"
import { useState } from "react"
import gsap from "gsap"


const Header: React.FC = () => {

    const[stateMenu, setStateMenu] = useState<boolean>(true)

    const btnMenu = () => {
        setStateMenu(!stateMenu)
        if(stateMenu){
            gsap.to("#windowMenu", {right: 0})
        }
        else{
            gsap.to("#windowMenu", {right: "-330px"})
        }
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.name}>KixStore</div>

                <div className={styles.box}>
                    <div className={styles.boxHeader}>
                        <h1>KixStore</h1>

                        <div className={styles.headerMenu}>
                            <p className={styles.menuItem}><a href="#catalog">Каталог</a></p>
                            <p className={styles.menuItem}><a href="#aboutUs">О нас</a></p>
                            <p className={styles.menuItem}><a href="#productSelection">Подбор товара</a></p>
                            <p className={styles.menuItem}><a href="#team">Наша команда</a></p>
                            <p className={styles.menuItem}><a href="#questions">Вопросы</a></p>
                            <p className={styles.menuItem}><a href="#contacts">Контакты</a></p>
                        </div>

                        <div onClick={btnMenu} className={styles.btnMenu}><ion-icon name="menu"></ion-icon></div>
                    </div>

                    <div className={styles.boxMain}>
                        <div className={styles.mainTextH}>
                            <h1>Кроссовки известных брендов</h1> 
                            <h1>с доставкой по России и СНГ</h1>
                        </div>

                        <div className={styles.mainTextP}>
                            <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                        </div>

                        <button className={styles.mainBtn}><a href="#catalog">Перейти к покупкам</a></button>
                    </div>
                </div>
            </div>
            
            <div id="windowMenu" className={styles.windowMenu}>
                <div onClick={btnMenu} className={styles.windowCross}><ion-icon name="add"></ion-icon></div>
                <h1 className={styles.windowName}>KixStore</h1>
                
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#catalog">-Каталог</a></h3>
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#aboutUs">-О нас</a></h3>
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#productSelection">-Подбор товара</a></h3>
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#team">-Наша команда</a></h3>
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#questions">-Вопросы</a></h3>
                <h3 onClick={btnMenu} className={styles.winItem}><a href="#contacts">-Контакты</a></h3>
            </div>
        </>
    )
}


export default Header;