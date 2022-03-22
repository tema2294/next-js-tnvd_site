import Link from "next/link";
import Image from "next/image";
import arrowBack from '../../public/img/arrow-back.svg'


export const Header = ()=> {
    return (
        <header>
            <nav className="nav-container">
                <Link href="/">
                    <Image width={30} height={30} src={arrowBack} className='arrow-back-svg'/>
                </Link>
                <Link href="/">ТНВД 76</Link>

                <a className="nav-info" href="tel:+79066359997">
                    <div className="nav-info_work-time">Пн-Вс 10:00 - 21:00</div>
                    <div className="nav-info_work-number">+ 7 906 635 9997</div>
                </a>
            </nav>
        </header>
    )
}