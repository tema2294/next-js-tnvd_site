import './style.scss'
import {Link} from "react-router-dom";


export const Categories = () => {



    return (
        <div className="category-list">
            <Link to={'tnvd-item-list'} >
                <div className="card">
                    <img height="140" className="card-img" src="https://автостанция63.рф/img/catalog34.png"/>

                    <div className="content-card">
                        <span className="header-card">Тнвд</span>

                    </div>
                    <div className="actions-container">

                    </div>
                </div>
            </Link>
            <div className="card">
                <img height="140" className="card-img"
                     src="https://diesel-exp.ru/upload/iblock/96c/96c252f19a43a8c4309559b87e9142e5.jpg"/>
                <div className="content-card">
                    <span className="header-card">Плунжерные пары</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className="card">
                <img height="140" className="card-img"
                     src="https://dizelstore.ru/image/cache/catalog/tovar/%20%D0%90%D0%97%D0%9F%D0%98-500x500.jpg"/>
                <div className="content-card">
                    <span className="header-card">Распылители</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className="card">
                <img height="140" className="card-img"
                     src="https://www.enisey-servis.ru/upload/resize_cache/iblock/04e/244_172_1/04e023ef096d5b495bc204e2b5dc01d0.jpg"/>
                <div className="content-card">
                    <span className="header-card">ТННД</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className="card">
                <img height="140" className="card-img" src="https://cdn-icons-png.flaticon.com/512/64/64722.png"/>
                <div className="content-card">
                    <span className="header-card">Другое</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
        </div>
    )
}