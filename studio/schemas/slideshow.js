export default {
    type: 'object',
    name: 'slideshow',
    title: 'Slideshow',
    fields: [
        {
            type: 'string',
            title: 'title',
            name: 'Title'
        },
        {
            type: 'array',
            title: 'Slides',
            name: 'slides',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid'
            }
        }
    ]
}