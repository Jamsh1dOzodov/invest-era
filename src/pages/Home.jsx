import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Портфели</h2>
                <div className="portfolio-section">
                    <button className="portfolio-section__title portfolio-section__title--active">Unity</button>
                    <button className="portfolio-section__title portfolio-section__title--disabled">Ideas</button>
                </div>
                <div className="portfolio-region">
                    <h3 className="portfolio-region__title">Россия</h3>
                    <ul className="portfolio-region__list list">
                        <li className="list__item"><Link className="list__link" to="/russia">Российские компании с наибольшим числом работников</Link></li>
                        <li className="list__item"><Link className="list__link" to="/russia">Компании с высокой капитализацией - Рынок акций России</Link></li>
                        <li className="list__item"><Link className="list__link" to="/russia">Российские компании с низкой капитализацией</Link></li>
                        <li className="list__item"><Link className="list__link" to="/russia">Эти Акции России приносят высокие дивиденды</Link></li>
                    </ul>
                </div>
                <div className="portfolio-region">
                    <h3 className="portfolio-region__title">США</h3>
                    <ul className="portfolio-region__list list">
                        <li className="list__item"><Link className="list__link" to="/usa">Российские компании с наибольшим числом работников</Link></li>
                        <li className="list__item"><Link className="list__link" to="/usa">Компании с высокой капитализацией - Рынок акций России</Link></li>
                        <li className="list__item"><Link className="list__link" to="/usa">Российские компании с низкой капитализацией</Link></li>
                        <li className="list__item"><Link className="list__link" to="/usa">Эти Акции России приносят высокие дивиденды</Link></li>
                    </ul>
                </div>
                <div className="portfolio-region">
                    <h3 className="portfolio-region__title">Китай</h3>
                    <ul className="portfolio-region__list list">
                        <li className="list__item"><Link className="list__link" to="">Российские компании с наибольшим числом работников</Link></li>
                        <li className="list__item"><Link className="list__link" to="">Компании с высокой капитализацией - Рынок акций России</Link></li>
                        <li className="list__item"><Link className="list__link" to="">Российские компании с низкой капитализацией</Link></li>
                        <li className="list__item"><Link className="list__link" to="">Эти Акции России приносят высокие дивиденды</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Home;