# Ultra-Lyrics

<img src="https://img.icons8.com/color/96/000000/music--v2.png" alt="dotenv" align="right" />

Ultra-Lyrics is a package which fetches the [Genius](https://img.icons8.com/color/144/000000/music--v2.png) API and uses the data to scrap the lyrics from the actual website. Occasionally paired with [Spotifydl-Core](https://www.npmjs.com/package/spotifydl-core)

## Install

```
npm i ultra-lyrics
```

## Usage

> Search for songs

```TS
import { search } from 'ultra-lyrics'
// const { search } = require('ultra-lyrics')
(async () => {
    const { data, error } = await search('Blue Clapper')
    if (error instanceof Error) console.error('An error occurred', error)
    else console.log('Results', data)
})
```

> Get Lyrics

```TS
import { search, getLyrics } from 'ultra-lyrics'
// const { search } = require('ultra-lyrics')
(async () => {
    let { data, error, getLyrics } = await search('Precious Photographs')
    if (error instanceof Error) console.error('An error occurred while searching', error)
    else {
        const song = data[0]
        { data, error } = await getLyrics(song) // you can also pass the title too
        if (error) console.error('An error occurred while fetching lyrics', error)
        else console.log('Lyrics', data)
    }
})
```

> Get Song

```TS
import { getSong } from 'ultra-lyrics'
// const { search } = require('ultra-lyrics')
(async () => {
    const { data, error } = await getSong('Dreaming Days')
    if (error instanceof Error) console.error('An error occurred', error)
    else console.log('Song', data)
})
```

As of right now, ultra-lyrics exports 3 functions. All of them will return a Promise of the object of type [`UltraLyricsFunctionReturnType`](https://github.com/AlenSaito1/ultralife/blob/61f6e6f6d125b64d76bc81ad00a608760ab5ab72/src/Types.ts#L88). It has 2 Properties, `error` and `data`. The error property will contain an instance of the [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class if there was an error. The data property will contain the data returned by the function IF NO ERROR OCCURED. This helps in avoidng the `"try-catch hell"`. Full Credits[Jeff Delaney](https://github.com/codediodeio) for this idea. Watch this video by [fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA) for more info: [Async Await try-catch hell](https://youtu.be/ITogH7lJTyE)

---
