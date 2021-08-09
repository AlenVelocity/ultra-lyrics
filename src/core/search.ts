import { IGeniusResponse, IRawSearchResponse } from '..'
import { API_BASE_URL, USER_AGENT } from '../Constants'
import Parser from '../Parser'
import { SearchResults, UltraLyricsFunctionReturnType } from '../Types'
import Utils from '../Utils'

/**
 * Search for lyrics
 * @param term The query to search for
 * @returns A Promise that resolves to an object containing the search results
 */
export const search = async (term: string): Promise<UltraLyricsFunctionReturnType<SearchResults>> => {
    try {
        const data = await Utils.fetch<IGeniusResponse<IRawSearchResponse>>(`${API_BASE_URL}/search/song?q=${term}`, {
            headers: {
                'User-Agent': USER_AGENT
            }
        })
        return {
            data: new Parser(
                data.response.sections
                    .map((result) => result.hits.map((hit) => hit.result))
                    .flat()
                    .filter((hit) => hit)
            ).parse(),
            error: null
        }
    } catch (e) {
        return { data: null, error: e as Error }
    }
}
