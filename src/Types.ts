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

export interface IResponse {
    sections: ISection[]
    next_page: number
}
export interface IRawSearchResults {
    meta: IMeta
    response: IResponse
}

export type ISearchResults = {
    id: number
    title: string
    artist: Partial<IArtist>
    image: string
    url: string
}[]

export type UltraLyricsFunctionReturnType<T> = {
    error: Error | null
    data: T | null
}
