import axios, { AxiosRequestConfig } from 'axios'
import { USER_AGENT } from '.'

export default abstract class Utils {
    constructor() {
        throw new Error('Cannot Construct Abstract Class')
    }

    static fetch = async <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
        (
            await axios.get<R>(
                url,
                config || {
                    headers: Utils.getHeaders()
                }
            )
        ).data

    static getHeaders = (): { [key: string]: string } => {
        const headers: {
            [key: string]: string
        } = {
            'User-Agent': USER_AGENT
        }
        if (process.env.GENIUS_ACCESS_TOKEN) headers['Authorization'] = `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`
        return headers
    }
}
