import styles from "./team.module.css"


interface info{
    id: number;
    name: string;
    dolennost: string;
    foto: string;
}

const Team: React.FC = () => {

    const infoUsers: info[] = [
        { id: 1, name: "Максим Золотарев", dolennost: "Администратор", foto: "foto1" },
        { id: 2, name: "Арина Михайлова", dolennost: "Администратор", foto: "foto2" },
        { id: 3, name: "Елизавета Громова", dolennost: "Администратор", foto: "foto3" },
        { id: 4, name: "Максим Федоров", dolennost: "Администратор", foto: "foto4" },
        { id: 5, name: "Иван Орлов", dolennost: "Администратор", foto: "foto5" },
        { id: 6, name: "София Кузнецова", dolennost: "Администратор", foto: "foto6" },
    ]

    return(
        <>
            <div id="team" className={styles.wrapper}>
                <div className={styles.circle}>

                </div>

                <div className={styles.margin}>
                    <h1 className={styles.name}>Наша команда</h1>

                    <div className={styles.teams}>
                        {infoUsers.map(user => (
                            <div key={user.id} className={styles.item}>
                                <div className={styles[user.foto]}></div>
                                <h2>{user.name}</h2>
                                <h3>{user.dolennost}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;