export interface IArtist {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    index_character: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    slug: string
    url: string
}

export interface IStatus {
    unreviewed_annotations: number
    concurrents: number
    hot: boolean
    pageviews: number
}

export interface IHit {
    annotation_count: number
    api_path: string
    full_title: string
    header_image_thumbnail_url: string
    header_image_url: string
    id: number
    instrumental: false
    lyrics_owner_id: null
    lyrics_state: string
    lyrics_updated_at: string
    path: string
    pyongs_count: number
    song_art_image_thumbnail_url: string
    song_art_image_url: string
    stats: IStatus
    title: string
    title_with_featured: string
    updated_by_human_at: number
    url: string
    song_art_primary_color: string
    song_art_secondary_color: string
    song_art_text_color: string
    primary_artist: IArtist
}

export interface ISection {
    type: string
    hits: {
        highlights: string
        index: string
        result: IHit
    }[]
}

export interface IMeta {
    status: number
}

export interface IRawSearchResponse {
    sections: ISection[]
    next_page: number
}
export interface IGeniusResponse<R> {
    meta: IMeta
    response: R
}

export type Song = {
    /** ID of the song*/
    id: number
    /** Title of the song*/
    title: string
    /** Artist of the song */
    artist: Partial<IArtist>
    /** URL of the cover art*/
    image: string
    /** URL of the song*/
    url: string
}
export type SearchResults = Song[]

/**
 * Every function exported from package returns this object with this type
 * @property {null|Error} error - this property will the null if no error occurred or an Error object if an error occurred
 * @property data - This property will contain the data returned by the function
 */
export type UltraLyricsFunctionReturnType<T> = {
    error: Error | null
    data: T | null
}
