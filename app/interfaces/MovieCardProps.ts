type MoveLength = {
    hour: number;
    min: number;
}

interface MovieCardProps {
    title: string;
    imageSrc: string;
    year: number;
    length: MoveLength;
    type: Array<string>;
    rate: string;
    cardStyle?:string;
    souce?:string;
    description?:string;
    onClick?:() => void;
    actors?:Array<string>;
}

export default MovieCardProps;