import Link from 'next/link'
import style from './style.module.scss'
import Image from 'next/image'


export const Categories = () => {


    return (
        <div className="category-list">
            <Link href={'category/tnvd'}>
                <div className={style.card}>
                    <div className={style.imgContainer}>
                        <Image layout="fill" objectFit={"contain"} className={style.cardImg}
                               src="https://автостанция63.рф/img/catalog34.png"/>
                    </div>
                    <div className={style.contentCard}>
                        <span className={style.headerCard}>Тнвд</span>

                    </div>
                    <div className="actions-container">

                    </div>
                </div>
            </Link>
            <div className={style.card}>
                <div className={style.imgContainer}>
                    <Image layout="fill" objectFit={"contain"} className={style.cardImg}
                           src="https://diesel-exp.ru/upload/iblock/96c/96c252f19a43a8c4309559b87e9142e5.jpg"/>
                </div>
                <div className={style.contentCard}>
                    <span className={style.headerCard}>Плунжерные пары</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className={style.card}>
                <div className={style.imgContainer}>
                    <Image layout="fill" objectFit={"contain"} className={style.cardImg}
                           src="https://dizelstore.ru/image/cache/catalog/tovar/%20%D0%90%D0%97%D0%9F%D0%98-500x500.jpg"/>
                </div>
                <div className={style.contentCard}>
                    <span className={style.headerCard}>Распылители</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className={style.card}>
                <div className={style.imgContainer}>
                    <Image layout="fill" objectFit={"contain"} className={style.cardImg}
                           src="https://traktortula.ru/wp-content/uploads/2019/05/f7ebd617094fdc0cc370899498d13d56.jpg"/>
                </div>
                <div className={style.contentCard}>
                    <span className={style.headerCard}>ТННД</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
            <div className={style.card}>
                <div className={style.imgContainer}>
                    <Image layout="fill" objectFit={"contain"} className={style.cardImg}
                           src="https://cdn-icons-png.flaticon.com/512/64/64722.png"/>
                </div>
                <div className={style.contentCard}>
                    <span className={style.headerCard}>Другое</span>
                </div>
                <div className="actions-container">
                </div>
            </div>
        </div>
    )
}