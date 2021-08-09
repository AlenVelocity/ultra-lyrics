import { load } from 'cheerio'
import { IGeniusResponse, UltraLyricsFunctionReturnType } from '.'
import { API_BASE_URL } from './Constants'
import { ISearchResults } from './Types'
import Utils from './Utils'

export const getLyrics = async (
    param: number | Partial<ISearchResults[0]>
): Promise<UltraLyricsFunctionReturnType<string>> => {
    const id = typeof param === 'number' ? param : param.id
    const { response } = await Utils.fetch<IGeniusResponse<{ song: { url: string } }>>(`${API_BASE_URL}/songs/${id}`, {
        responseType: 'json'
    })
    for (let i = 0; i < 6; i++) {
        const lyrics = await Utils.fetch<string>(response.song.url, { responseType: 'text' })
        const data = load(lyrics)('div.lyrics').text().trim()
        if (data.length > 0) return { data, error: null }
    }
    return { data: null, error: new Error('No lyrics found') }
}
