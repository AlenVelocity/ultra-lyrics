import { load } from 'cheerio'
import { IGeniusResponse, Song, UltraLyricsFunctionReturnType } from '..'
import Utils from '../Utils'

/**
 * Function to get lyrics from Genius.com
 * @param {number | ISearchResults[0]} - ID of the song or an elemeny of the array of SearchResults
 * @returns {Promise<UltraLyricsFunctionReturnType<{ error: null | Error, data: string }>> - The promise that resolves to the lyrics
 */
export const getLyrics = async (param: number | Partial<Song>): Promise<UltraLyricsFunctionReturnType<string>> => {
    try {
        const id = typeof param === 'number' ? param : param.id
        const { response } = await Utils.fetch<IGeniusResponse<{ song: { url: string } }>>(
            Utils.getUrl(`/songs/${id}`),
            {
                responseType: 'json'
            }
        )
        for (let i = 0; i < 6; i++) {
            const lyrics = await Utils.fetch<string>(response.song.url, { responseType: 'text' })
            const data = load(lyrics)('div.lyrics').text().trim()
            if (data.length > 0) return { data, error: null }
        }
        return { data: null, error: new Error('No lyrics found') }
    } catch (err) {
        return { data: null, error: err as Error }
    }
}
