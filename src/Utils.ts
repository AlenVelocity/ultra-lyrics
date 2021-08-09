import axios, { AxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '.'

export default abstract class {
    constructor() {
        throw new Error('Cannot Construct Abstract Class')
    }

    static fetch = async <R>(url: string, config: AxiosRequestConfig): Promise<R> =>
        (await axios.get<R>(url, config)).data

    static getUrl = (path = ''): string =>
        `${API_BASE_URL}${path}${
            process.env.GENIUS_ACCESS_TOKEN ? `&access_token=${process.env.GENIUS_ACCESS_TOKEN}` : ''
        }`
}
