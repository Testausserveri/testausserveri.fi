import { getPlaiceholder } from "plaiceholder";
import fs from 'fs/promises';
import path from 'path';

export type ImageDetails = {
    src: string,
    width: number,
    height: number,
    blurDataURL: string
};

export const getImage = async (src: string): Promise<ImageDetails> => {
    let buffer;

    if (src.startsWith('http://') || src.startsWith('https://')) {
        buffer = await fetch(src).then(async (res) =>
            Buffer.from(await res.arrayBuffer())
        );
    } else {
        const absolutePath = path.join('public', src);
        buffer = await fs.readFile(absolutePath);
    }

    const {
        metadata: { height, width },
        ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
        src,
        height,
        width,
        blurDataURL: plaiceholder.base64
    };
};
