import axios, { AxiosRequestConfig } from 'axios'

export default abstract class {
    constructor() {
        throw new Error('Cannot Construct Abstract Class')
    }

    static fetch = async <R>(url: string, config: AxiosRequestConfig): Promise<R> =>
        (await axios.get<R>(url, config)).data
}
