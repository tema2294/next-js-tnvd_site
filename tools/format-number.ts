export const formatNumber = (e:any)=> {
    return e ? `${e}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") : 0;
}