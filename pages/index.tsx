import {useState} from "react";
import imgWarranty from '../public/img/342-3426164_5-year-f.png'
import imgAvailability from '../public/img/vote-icon-19.png'
import imgObligations from '../public/img/png-clipart-computer.png'
import logo from '../public/img/main_logo.svg'
import Head from 'next/head'


import Image from 'next/image'
import {Categories} from "../components/categories/categories";

function Index() {
    const [isOpenBurgerMenu, setOpenBurgerMenu] = useState(false)

    function customScroll(type: string) {
        const sections = document.querySelector(type);
        if (sections) {
            return sections.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
    }

    function downloadFile() {
        const link = document.createElement('a');
        link.setAttribute('href', '/Microsoft Excel Worksheet.xlsx');
        link.setAttribute('download', 'price.xlsx');
        link.click();
        return false;
    }

    return (
        <main>
            <Head>
                <meta name="yandex-verification" content="8a95b949a14d61f4" />
                <meta name="google-site-verification" content="92NF1mhTfKMXM2ND_eHE30LzTXdSc7vrGZuXqfQY7cU" />
                <title>Дизель маркет , топливные насосы высокого давления ремонт и продажа. ТНВД - Дизель маркет Ярославль. Тнвд,тннд,распылители и прочие комплектующие.</title>
                <meta
                    name="description"
                    content="Дизель маркет . Топливные насосы высокого давления ремонт и продажа , доставка по всей России. ТНВД - Дизель маркет 76 Ярославль.Распылители , подкачки , плунжерные пары ,тннд , насосы."
                />
            </Head>
            <header>
                <nav className="nav-container">
                    <div className="logo">
                        <Image objectFit={'contain'} layout="fill"  src={logo} alt="logo company"/>
                    </div>
                    <div onClick={() => setOpenBurgerMenu((prev) => !prev)}
                         className={`${!isOpenBurgerMenu ? 'burger_menu' : 'burger_menu burger_menu-open'}`}>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`${!isOpenBurgerMenu ? 'nav-list' : 'nav-list nav-list-open'}`}>
                        <li onClick={() => customScroll('.info-section')}>О нас</li>
                        <li onClick={() => customScroll('.advantages-section')}>Преимущества</li>
                        <li onClick={() => customScroll('.address-section')}>Контакты</li>
                        <li onClick={() => customScroll('.map-section')}>Как добраться</li>
                    </ul>
                    <a className="nav-info" href="tel:+79066359997">
                        <div className="nav-info_work-time">Пн-Вс 10:00 - 21:00</div>
                        <div className="nav-info_work-number">+ 7 906 635 9997</div>
                    </a>
                </nav>

            </header>
            <section className="main-section">
                <div className="info-container">
                    <div className="info-container_title">Дизель маркет в Ярославле,<br/> качество и гарантия!</div>
                    <h1 className="info-container_text">Ремонт и продажа Тнвд и комплектующих</h1>
                    <h2 className="info-container_text">Доставка по всей России!</h2>
                    <div onClick={downloadFile} className="info-container_btn">Скачать прайс</div>
                </div>
            </section>
            <section className="category">
                <div className="category-header">Категории</div>

                <Categories/>

            </section>
            <section className="info-section">
                <div className="info-section_header">О нас</div>
                <div className="info-section_main">
                    <p>
                        Интернет магазин новых и б/у запчастей.У нас вы можете купить запчасти по всей России. Команда
                        профессионалов специализируется на подборе и доставке запчастей для ремонта и обслуживания ТНВД.
                    </p>
                    <p>Также делаем полный спектр ремонтных работ , от диагностики до замены любой
                        запчасти. Вы всегда получаете качественную работу от наших профессионалов и полную гарантию на
                        все виды
                        работ.
                    </p>
                    <p>
                        Доставка по всей России.
                    </p>
                </div>
            </section>
            <section className="advantages-section">
                <div className="advantages-section_title">
                    Наши преимущества
                </div>

                <div className="advantages-section_list">
                    <div className="card">
                        <div className={'advantages-img-container'}>
                            <Image objectFit={'contain'} layout="fill" className="card_img" src={imgAvailability} alt=""/>
                        </div>
                        <div className="card_title">Наличие</div>
                        <div className="card_text">Большой перечень запчастей в наличие</div>
                    </div>
                    <div className="card">
                        <div className={'advantages-img-container'}>

                            <Image objectFit={'contain'} layout="fill" className="card_img" src={imgWarranty} alt=""/>
                        </div>

                        <div className="card_title">Гарантия</div>
                        <div className="card_text">Полное гарантийное обслуживание на всю продукцию</div>
                    </div>
                    <div className="card">
                        <div className={'advantages-img-container'}>
                            <Image objectFit={'contain'} layout="fill" className="card_img" src={imgObligations} alt=""/>
                        </div>
                        <div className="card_title">Обязательства</div>
                        <div className="card_text">выполнения любого объема работы в срок</div>
                    </div>
                </div>
            </section>
            <section className="address-section">
                <div className="address-card">
                    <div className="address-section_title">
                        <span>Наш телефон:</span> <span>+7 906 635 9997</span>
                    </div>
                    <hr/>
                    <div className="address-section_text">
                      Мы находимся в городе  Ярославль,  улица Механизаторов, д. 7 , 150044
                        <br/>
                        <br/>
                        Пн-Вс: 10:00–21:00
                    </div>
                </div>


            </section>
        </main>
    )
}

export default Index