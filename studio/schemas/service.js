export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            description: 'Excerpt that appears on service landing page',
            type: 'text',
            validation: Rule => [
                Rule.required().min(50).error('A description of min. 50 characters is required'),
                Rule.max(200).warning('Too long!')
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            description: 'You can use this field to schedule post where you show them',
            type: 'datetime'
        },
        {
            name: 'headlineOne',
            title: 'Small Headline',
            description: 'Displays page-level h1',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A headline of min. 10 characters is required'),
                Rule.max(45).warning('Shorter titles are usually better')
            ]
        },
        {
            name: 'headlineTwo',
            title: 'Large Headline',
            description: 'Displays page-level h2',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('A headline of min. 10 characters is required'),
                Rule.max(45).warning('Shorter titles are usually better')
            ]
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            description: 'Displays short description below page-level headline',
            type: 'text',
            validation: Rule => [
                Rule.required().min(50).error('A description of min. 50 characters is required'),
                Rule.max(200).warning('Too long!')
            ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'mainImage'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            image: 'mainImage'
        },
        prepare ({ title = 'No title', publishedAt, image }) {
            return {
                title,
                subtitle: publishedAt
                    ? new Date(publishedAt).toLocaleDateString()
                    : 'Missing publishing date',
                media: image
            }
        }
    }
}