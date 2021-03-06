import Link from "next/link";
import Image from "next/image";
import arrowBack from '../../public/img/arrow-back.svg'
import logo from "../../public/img/main_logo.svg";


export const Header = (props: {prevHref: string})=> {
    const {prevHref} = props
    return (
        <header>
            <nav className="nav-container">
                <div className='nav-back-link'>
                    <Link href={prevHref}>
                        <Image width={30} height={30} src={arrowBack} className='arrow-back-svg'/>
                    </Link>
                </div>
                <Link href="/">
                    <div className="logo">
                        <Image objectFit={'contain'} layout="fill"  src={logo} alt="logo company"/>
                    </div>
                </Link>

                <a className="nav-info" href="tel:+79066359997">
                    <div className="nav-info_work-time">Пн-Вс 10:00 - 21:00</div>
                    <div className="nav-info_work-number">+ 7 906 635 9997</div>
                </a>
            </nav>
        </header>
    )
}