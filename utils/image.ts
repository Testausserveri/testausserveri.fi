import { getPlaiceholder } from "plaiceholder";
import fs from 'fs/promises';
import path from 'path';

export const getImagePlaceholder = async (src: string): Promise<string> => {
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

    return plaiceholder.base64;
};
