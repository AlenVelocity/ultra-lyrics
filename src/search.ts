import { API_BASE_URL, USER_AGENT } from './Constants'
import Parser from './Parser'
import { IRawSearchResults, ISearchResults, UltraLyricsFunctionReturnType } from './Types'
import Utils from './Utils'

export const search = async (term: string): Promise<UltraLyricsFunctionReturnType<ISearchResults>> => {
    try {
        const data = await Utils.fetch<IRawSearchResults>(`${API_BASE_URL}/search/song?q=${term}`, {
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
