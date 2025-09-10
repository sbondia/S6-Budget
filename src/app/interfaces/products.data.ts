export interface ProductsData {
    title: string
    desc: string
    price: number
    extra?: ProductData_extra[]
}
interface ProductData_extra{
    title: string
    desc: string
    price: number
}