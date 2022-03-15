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
                               src="/../public/img/catalog34.png"/>
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
                           src="/../public/img/96c252f19a43a8c4309559b87e9142e5 (1).png"/>
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
                           src="/../public/img/_АЗПИ-500x500 (1).png"/>
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
                           src="/../public/img/f7ebd617094fdc0cc370899498d13d56 (1).png"/>
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
                           src="/../public/img/64722 (1).png"/>
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