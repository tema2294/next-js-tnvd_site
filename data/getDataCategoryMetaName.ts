

export const getDataCategoryMetaName = (category: any):string => {
    if (!category) return 'топливное оборудывание'
    const categoryName = typeof category === 'string' ? category : category[0]
    switch (categoryName) {
        case 'tnnd':
            return "топливные насос низкого давления"
        case 'tnvd':
            return "топливные насос выского давления"
        case 'others':
            return 'остальные запчасти'
        case 'sprayers':
            return 'топливные распылители'
        case 'plunger-pair':
            return 'плунжерные пары'
        default:
            return 'undefined'
    }
}