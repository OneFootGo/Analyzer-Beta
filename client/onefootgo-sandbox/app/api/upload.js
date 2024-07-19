import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async function file_handler(req) {
    if (req.method != 'POST') {
        return new Response(`Method ${req.method} Not Allowed`, {status:405})
    } 
    try {
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm();
            form.uploadDir = path.join(process.cwd(), 'uploads'); //wghere file saved

            form.keepExtensions = true;
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                resolve(files);
            });
        });

        const fileDetails = data.file;
        const oldPath = fileDetails.path;
        const newPath = path.join(form.uploadDir, fileDetails.originalFilename);
        await fs.promises.rename(oldPath, newPath);

        await fs.rename(oldPath, newPath);

        console.log(`File Saved to ${newPath}`);
        return new Response(JSON.stringify({ message: 'File uploaded successfully!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error){
        return new Response('Interntal Server Error', {status:500})
    }
    
    
}