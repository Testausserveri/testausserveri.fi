import { getPlaiceholder } from "plaiceholder";
import fs from 'fs/promises';
import path from 'path';
import isValidHttpUrl from "./isValidHttpUrl";

export const getImageDetails = async (src: string): Promise<ReturnType<typeof getPlaiceholder>> => {
    let buffer;

    buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const plaiceholder = await getPlaiceholder(buffer, { size: 10 });

    return plaiceholder;
};


