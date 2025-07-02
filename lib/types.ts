type Category =
    {
        name: string,
        _id: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    }

type Project =
    {
        _id: string,
        name: string,

        category: [
            Category
        ],

        image: {
            url: string,
            publicId: string,
            _id: string,
        },

        images: [
            {
                url: string,
                publicId: string,
                _id: string,
            }
        ] | [],
        videoLink: string,
        githubLink: string,
        demoLink: string,
        description: string,
        __v: number
    }