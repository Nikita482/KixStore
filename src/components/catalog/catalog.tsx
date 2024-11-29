import styles from "./catalog.module.css";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

import { Link } from "react-router-dom";

const Catalog: React.FC = () => {
    // Получаем все карточки из хранилища
    const allCards = useSelector((state: RootState) => state.cards);

    // Состояния для диапазона цен
    const [minValue, setMinValue] = useState<number>(1);
    const [maxValue, setMaxValue] = useState<number>(30000);

    // Состояние для отфильтрованных карточек
    const [filteredCards, setFilteredCards] = useState(allCards);

    // Обработчики изменения значений диапазона
    const minCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value));
    }
    const maxCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.target.value));
    }

    // Функция для применения фильтра
    const applyFilter = () => {
        const filtered = allCards.filter(card => {
            const price = parseInt(card.price.replace(/\D/g, ''));
            
            const isPriceInRange = price >= minValue && price <= maxValue;
            const isGenderMatched = selectedGender ? card.gender === selectedGender : true;
            const isSizeMatched = selectedSize ? card.size === selectedSize : true;
    
            return isPriceInRange && isGenderMatched && isSizeMatched;
        });
    
        setFilteredCards(filtered);
    }
    


    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    }
    
    const handleSizeChange = (size: number) => {
        setSelectedSize(size);
    }
    

    const[displayedCardsCount, setDisplayedCardsCount] = useState<number>(9);
    const[miniGenderMan, setMiniGenderMan] = useState<boolean>(true)
    const[miniGenderWom, setMiniGenderWom] = useState<boolean>(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setDisplayedCardsCount(8);
            } else {
                setDisplayedCardsCount(9);
            }

            if (window.innerWidth <= 300) {
                setMiniGenderMan(false)
                setMiniGenderWom(false)
            } else {
                setMiniGenderMan(true)
                setMiniGenderWom(true)
            }
        };

        // Устанавливаем начальное значение
        handleResize();

        // Добавляем обработчик события изменения размера окна
        window.addEventListener("resize", handleResize);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const[stateMobuleFilter, setStateMobuleFilter] = useState<boolean>(true)

    const mobuleFilter = () => {
        setStateMobuleFilter(!stateMobuleFilter)
        if(stateMobuleFilter === true){
            gsap.to("#mobuleFilter", {left: 0})
        }else{
            gsap.to("#mobuleFilter", {left: "-400px"})
        }
    }
    

    return (
        <>
            <div id="catalog" className={styles.globalWrapper}>
                <div className={styles.header}>
                    <h2>Каталог</h2>

                    <button onClick={mobuleFilter} className={styles.filterButton}>
                        <FontAwesomeIcon icon={faSlidersH} />
                    </button>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.boxFilter}>
                        <div className={styles.filter}>
                            <h3>Подбор по параметрам</h3>

                            <p className={styles.nameCatalog}>Цена, руб</p>
                            <div className={styles.filterPrice}>
                                <h3>{minValue} <div className={styles.borderMinValue}></div></h3>
                                <h3>{maxValue}</h3>
                            </div>

                            <div className={styles.rangeBox}>
                                <input
                                    type="range"
                                    className={styles.inputRange}
                                    min={1}
                                    max={5000}
                                    step={1}
                                    value={minValue}
                                    onChange={minCount}
                                />
                                <input
                                    type="range"
                                    className={styles.inputRange}
                                    min={5001}
                                    max={25850}
                                    step={1}
                                    value={maxValue}
                                    onChange={maxCount}
                                />
                            </div>

                            <div className={styles.genderSelector}>
                                <h3>Пол</h3>
                                
                                <div className={styles.genderSelectorCheckbox}>
                                    <div className={styles.boxCheckbox}>
                                        <input
                                            className={styles.checkbox}
                                            name="gender"
                                            type="radio"
                                            checked={selectedGender === 'man'}
                                            onChange={() => handleGenderChange('man')}
                                        />
                                        <label>мужской</label>
                                    </div>

                                    <div className={styles.boxCheckbox}>
                                        <input
                                            className={styles.checkbox}
                                            name="gender"
                                            type="radio"
                                            checked={selectedGender === 'wom'}
                                            onChange={() => handleGenderChange('wom')}
                                        />
                                        <label>женский</label>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.filterSize}>
                                <h3 className={styles.nameSize}>Размер</h3>
                                <div className={styles.boxSize}>
                                    <div className={styles.topSize}>
                                        <button onClick={() => handleSizeChange(35)} className={selectedSize != 35 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>35</h3></button>
                                        <button onClick={() => handleSizeChange(36)} className={selectedSize != 36 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>36</h3></button>
                                        <button onClick={() => handleSizeChange(37)} className={selectedSize != 37 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>37</h3></button>
                                    </div>

                                    <div className={styles.centerSize}>
                                        <button onClick={() => handleSizeChange(38)} className={selectedSize != 38 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>38</h3></button>
                                        <button onClick={() => handleSizeChange(39)} className={selectedSize != 39 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>39</h3></button>
                                        <button onClick={() => handleSizeChange(40)} className={selectedSize != 40 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>40</h3></button>
                                    </div>

                                    <div className={styles.bottomSize}>
                                        <button onClick={() => handleSizeChange(41)} className={selectedSize != 41 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>41</h3></button>
                                        <button onClick={() => handleSizeChange(42)} className={selectedSize != 42 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>42</h3></button>
                                        <button onClick={() => handleSizeChange(43)} className={selectedSize != 43 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>43</h3></button>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.blockBtnFilter}>
                                <button onClick={applyFilter} className={styles.BtnFilter}>Применить</button>
                            </div>
                        </div>
                    </div>

                    <div id="mobuleFilter" className={styles.boxFilterMobule}>
                        <div className={styles.filterMobule}>
                            <h3>Подбор по параметрам</h3>

                            <p className={styles.nameCatalog}>Цена, руб</p>
                            <div className={styles.filterPrice}>
                                <h3>{minValue} <div className={styles.borderMinValue}></div></h3>
                                <h3>{maxValue}</h3>
                            </div>

                            <div className={styles.rangeBox}>
                                <input
                                    type="range"
                                    className={styles.inputRange}
                                    min={1}
                                    max={5000}
                                    step={1}
                                    value={minValue}
                                    onChange={minCount}
                                />
                                <input
                                    type="range"
                                    className={styles.inputRange}
                                    min={5001}
                                    max={25850}
                                    step={1}
                                    value={maxValue}
                                    onChange={maxCount}
                                />
                            </div>

                            <div className={styles.genderSelector}>
                                <h3>Пол</h3>
                                
                                <div className={styles.genderSelectorCheckbox}>
                                    <div className={styles.boxCheckbox}>
                                        <input
                                            className={styles.checkbox}
                                            name="gender"
                                            type="radio"
                                            checked={selectedGender === 'man'}
                                            onChange={() => handleGenderChange('man')}
                                        />
                                        <label>{miniGenderMan ? <p>мужской</p> : <p>муж.</p>}</label>
                                    </div>

                                    <div className={styles.boxCheckbox}>
                                        <input
                                            className={styles.checkbox}
                                            name="gender"
                                            type="radio"
                                            checked={selectedGender === 'wom'}
                                            onChange={() => handleGenderChange('wom')}
                                        />
                                        <label>{miniGenderWom ? <p>женский</p> : <p>жен.</p>}</label>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.filterSize}>
                                <h3 className={styles.nameSize}>Размер</h3>
                                <div className={styles.boxSize}>
                                    <div className={styles.topSize}>
                                        <button onClick={() => handleSizeChange(35)} className={selectedSize != 35 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>35</h3></button>
                                        <button onClick={() => handleSizeChange(36)} className={selectedSize != 36 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>36</h3></button>
                                        <button onClick={() => handleSizeChange(37)} className={selectedSize != 37 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>37</h3></button>
                                    </div>

                                    <div className={styles.centerSize}>
                                        <button onClick={() => handleSizeChange(38)} className={selectedSize != 38 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>38</h3></button>
                                        <button onClick={() => handleSizeChange(39)} className={selectedSize != 39 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>39</h3></button>
                                        <button onClick={() => handleSizeChange(40)} className={selectedSize != 40 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>40</h3></button>
                                    </div>

                                    <div className={styles.bottomSize}>
                                        <button onClick={() => handleSizeChange(41)} className={selectedSize != 41 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>41</h3></button>
                                        <button onClick={() => handleSizeChange(42)} className={selectedSize != 42 ? styles.borderRightBtnSize : styles.borderRightBtnSizeSelected}><h3>42</h3></button>
                                        <button onClick={() => handleSizeChange(43)} className={selectedSize != 43 ? styles.noyBorderRightBtnSize : styles.noyBorderRightBtnSizeSelected}><h3>43</h3></button>
                                    </div>

                                </div>
                            </div>

                            <div onClick={mobuleFilter} className={styles.blockBtnFilter}>
                                <button onClick={applyFilter} className={styles.BtnFilter}>Применить</button>
                                <button className={styles.btnClose}>Закрыть</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.catalog}>
                        {filteredCards.length > 0 ? (
                            // Отображаем отфильтрованные карточки
                            filteredCards.slice(0, displayedCardsCount).map((card) => (
                                <div key={card.id} className={styles.item}>
                                    <img className={styles.foto} src={card.src} />
                                    <p>{card.name}</p>

                                    <div className={styles.infoCard}>
                                        <h3>{card.price}</h3>
                                        <h3>{card.gender}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.notCard}>
                                <h3>Карточки не найдены</h3>
                            </div>
                        )}

                        <div className={styles.catalogBtn}>
                            <Link className={styles.btn} to="/FullCatalog"><h4>Показать еще</h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog;
