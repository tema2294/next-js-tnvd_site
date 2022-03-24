import {tnnd_data} from "./tnnd";
import {tnvd_data} from "./tnvd";
import {sprayers_data} from "./sprayers";
import {others_data} from "./others";
import {plungerPair_data} from "./plungerPair";

export const getDataCategory = (category: string | string[]):any[] => {
    const categoryNameString = typeof category === 'string' ? category : category[0]

    switch (categoryNameString) {
        case 'tnnd':
            return tnnd_data
        case 'tnvd':
            return tnvd_data
        case 'others':
            return others_data
        case 'sprayers':
            return sprayers_data
        case 'plunger-pair':
            return plungerPair_data
        default:
            return []
    }
}