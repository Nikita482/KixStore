import style from "./fullCatalog.module.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import ScrollToLink from "../../scrollToTopю";


const FullCatalog: React.FC = () => {

    const cards = useSelector((state: RootState) => state.cards)

    return(
        <>
            <ScrollToLink />
            <div className={style.wrapper}>
                <div className={style.wrapperMargin}>
                    <div className={style.nameBlock}>
                        <h2>Все товары</h2>
                        <Link className={style.home} to="/"><ion-icon name="home"></ion-icon></Link>
                    </div>

                    <div className={style.wrapperCards}>
                        {cards.map(card => (
                            <div key={card.id} className={style.card}>
                                <img src={card.src} />
                                
                                <p className={style.name}>{card.name}</p>
                                
                                <h2>{card.price}</h2>

                                <div className={style.cardInfo}>
                                    <h2>{card.gender}</h2>
                                    <h3><p className={style.size}>Размер:</p><p className={style.sizeMobule}>Р:</p> {card.size}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.footer}>
                    <div className={style.marginFooter}>
                        <h1>KixStore</h1>

                        <div className={style.fotterInfo}>
                            <div className={style.infoBlock}>
                                <p>Главный офис</p>
                                <h2>+7 800 789 89 89</h2>
                            </div>

                            <div className={style.infoBlock}>
                                <p>отдел продаж</p>
                                <h2>+7 800 789 89 89</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullCatalog;