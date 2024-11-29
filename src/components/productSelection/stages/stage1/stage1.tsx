import styles from "./stage1.module.css"

interface species{
    id: number
    name: string
}


const Stage1: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const infoItems: species[] = [
        {id: 1, name: "Кеды"},
        {id: 2, name: "Кеды"},
        {id: 3, name: "Кеды"},
        {id: 4, name: "Кеды"},
        {id: 5, name: "Кеды"},
        {id: 6, name: "Кеды"},
    ]

    return(
        <>
            <div className={styles.header}>
                <h2>Мы подберем идеальную пару для вас</h2>
                <h4>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</h4>
            </div>

            <div className={styles.main}>
                <h3 className={styles.mainName}>Какой тип кроссовок рассматриваете?</h3>

                <div className={styles.mainItems}>
                    {infoItems.map(item => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemFoto}></div>

                            <div className={styles.wrapperBottom}>
                                <input
                                    className={styles.checkbox}
                                    name="gender" 
                                    type="radio"
                                />

                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <h3>1 из 3</h3>
                    {children}
                </div>
            </div>  
        </>
    )
}

export default Stage1;