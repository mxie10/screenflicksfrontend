export type MoveLength = {
    hour: number;
    min: number;
}

export interface MovieCardProps {
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
    hideDetails?:boolean;
}

export default MovieCardProps;