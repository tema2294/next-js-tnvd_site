import {Categories} from "../categories/categories";
import {useEffect, useState} from "react";


export const BurgerCategories = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [width, setWidth] = useState(1000);

    useEffect(() => {
        const resizeListener = () => {
            setWidth(window?.innerWidth)
        };
        resizeListener()
        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, [])
    const isMobil = width < 800
    return isMobil ?
        <>

            <div onClick={() => setIsVisible((prev) => !prev)}
                 className={`${!isVisible ? 'burger_menu' : 'burger_menu burger_menu-open'}`}>
                <span></span>
                <span></span>
            </div>
            {isVisible && <Categories/>}
        </>
        :
            <div className='padding-5'>
                <Categories/>
            </div>


}
