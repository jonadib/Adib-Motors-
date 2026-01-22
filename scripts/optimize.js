import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../public');

const targets = [
    {
        dir: 'landing',
        maxWidth: 1920,
        quality: 80,
    },
    {
        dir: 'collection',
        maxWidth: 1000,
        quality: 80,
    },
    {
        dir: 'helmet',
        maxWidth: 800,
        quality: 80,
    }
];

async function processDirectory(target) {
    const dirPath = path.join(rootDir, target.dir);
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory not found: ${dirPath}`);
        return;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(dirPath, file);
            const fileNameWithoutExt = path.parse(file).name;
            const outputPath = path.join(dirPath, `${fileNameWithoutExt}.webp`);

            // Check if webp already exists to avoid re-processing if run multiple times
            // But here we want to overwrite or ensure we create it.

            try {
                const metadata = await sharp(inputPath).metadata();

                let pipeline = sharp(inputPath);

                if (metadata.width > target.maxWidth) {
                    console.log(`Resizing ${file} from ${metadata.width} to ${target.maxWidth}...`);
                    pipeline = pipeline.resize(target.maxWidth);
                }

                console.log(`Converting ${file} to WebP...`);
                await pipeline
                    .webp({ quality: target.quality })
                    .toFile(outputPath);

                console.log(`Saved ${outputPath}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
}

async function main() {
    for (const target of targets) {
        console.log(`Processing ${target.dir}...`);
        await processDirectory(target);
    }
    console.log("Done!");
}

main();
