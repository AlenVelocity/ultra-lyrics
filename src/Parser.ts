import { IHit, ISearchResults } from '.'

export default class Parser {
    constructor(private raw: IHit[]) {}

    parse = (): ISearchResults => {
        return this.raw.map(({ id, title, primary_artist, song_art_image_url, url }) => ({
            id,
            url,
            title,
            image: song_art_image_url,
            artist: {
                id: primary_artist.id,
                name: primary_artist.name,
                url: primary_artist.url
            }
        }))
    }
}
