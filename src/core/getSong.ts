import { search } from './search'
import { Song, UltraLyricsFunctionReturnType } from '../Types'

/**
 * Function that returns a song object from a given song title or id
 * @param {string} query - name or ID of the song
 * @return promise of the object inclding the song
 */
export const getSong = async (param: string | number): Promise<UltraLyricsFunctionReturnType<Song>> => {
    try {
        const { error, data } = await search(param)
        if (error) throw error
        return { error: null, data: data?.[0] || null }
    } catch (e) {
        return { error: e as Error, data: null }
    }
}
