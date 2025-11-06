import { createContext, type Dispatch, type SetStateAction } from "react";

export type MovieContextType = {
    selectedMovie: string;
    setSelectedMovie: Dispatch<SetStateAction<string>>;
};

export const MovieContext = createContext<MovieContextType | null>(null);