import { IncomingForm } from 'formidable';

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async function file_handler(req) {
    if (req.method === 'POST') {
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm();
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                resolve(files);
            });
        });

        console.log(data);
        return new Response(JSON.stringify({ message: 'File uploaded successfully!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } else {
        return new Response(`Method ${req.method} Not Allowed`, {
            status: 405,
            headers: {
                'Allow': 'POST'
            }
        });
    }
}