import type { JSX } from "react";

// Implementor
interface Media {
    getTitle(): string;
    getSubTitle(): string;
    getDetails(): string
}

class Artist implements Media {
    constructor(
        private name: string,
        private genre: string,
        private followers: number
    )  {}
    getTitle(): string {
        return this.name;
    }
    getSubTitle(): string {
        return this.genre;
    }

    getDetails() : string {
        return `Followers ${this.followers}`;
    }
}

class Album implements Media {
    constructor(
        private title: string,
        private artist: string,
        private year: number
    )  {}
    getTitle(): string {
        return this.title;
    }
    getSubTitle(): string {
        return this.artist;
    }

    getDetails() : string {
        return `Released ${this.year}`;
    }
}

// Abstract Layer
abstract class View {
    constructor(protected media: Media) {}
    abstract render(): JSX.Element;
}

class ShortView extends View {
    render(): JSX.Element {
        return (
            <div style={{border: "1px solid", padding: 8}}>
                <h3>{this.media.getTitle()}</h3>
                <p>{this.media.getSubTitle()}</p>
            </div>
        )
    }
}


class LongView extends View {
    render(): JSX.Element {
        return (
            <div style={{border: "1px solid", padding: 8}}>
                <h3>{this.media.getTitle()}</h3>
                <h3>{this.media.getSubTitle()}</h3>
                <p>{this.media.getDetails()}</p>
            </div>
        )
    }
}


export default function Bridge() {
     const artist = new Artist("A R Rahman", "Indian Classic", 6342525);
     const album = new Album("Roja", "A R Rahman", 1994);

     const artistShort = new ShortView(artist);
     const albumLong = new LongView(album);

    return (
        <div>
            {artistShort.render()}
            {albumLong.render()}
        </div>
    )
}