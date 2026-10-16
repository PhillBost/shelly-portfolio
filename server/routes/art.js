import express from 'express';
import cloudinary from 'cloudinary';

const router = express.Router();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log("Cloudinary config loaded");

//this is what we do when a request comes in to the /art-images url
//router listens while server is active
router.get('/art-images', async (_, res) => {
    try {
        console.log("Request detected from client");
        //talk to cloundinary, generate a result 
        const result = await cloudinary.v2.search
            .expression('folder:art-site/*')
            .with_field('context')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute();

        /** map the result to res and return res to the caller
         *  also checks if a shopifyUrl exists
         **/
        res.json(result.resources.map((r) => {
            // Cloudinary SDK responses can expose custom context directly or
            // inside `context.custom`, depending on the response shape.
            const shopifyValue = r.context?.shopify ?? r.context?.custom?.shopify;
            const shopifyUrl = typeof shopifyValue === 'string'
                ? shopifyValue.trim() || null
                : null;

            return {
                public_id: r.public_id,
                display_name: r.display_name,
                shopifyUrl
            };
        }));
    }   catch (err) {
        console.error("Cloudinary error:", err);
        res.status(500).json({
            error: 'Cloundinary error',
            message: err.message
        });
    }
});

export default router;

