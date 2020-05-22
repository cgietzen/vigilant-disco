export default {
    name: 'figure',
    title: 'Figure',
    type: 'image',
    options: {
        hotspot: true
    },
    fields: [
        {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            options: {
                isHighlighted: true
            }
        }
    ]
}