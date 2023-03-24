export default function handler(req: any, res: any) {

    const data = {
        projects: [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" },
            { "id": 3, "name": "Charlie" },
            { "id": 4, "name": "Dave" },
            { "id": 5, "name": "Emily" },
            { "id": 6, "name": "Frank" },
            { "id": 7, "name": "Grace" },
            { "id": 8, "name": "Henry" },
            { "id": 9, "name": "Isabelle" },
            { "id": 10, "name": "Jacob" },
            { "id": 11, "name": "Katie" },
            { "id": 12, "name": "Luke" },
            { "id": 13, "name": "Maggie" },
            { "id": 14, "name": "Nate" },
            { "id": 15, "name": "Olivia" },
            { "id": 16, "name": "Paul" },
            { "id": 17, "name": "Quentin" },
            { "id": 18, "name": "Rachel" },
            { "id": 19, "name": "Sam" },
            { "id": 20, "name": "Tina" }
        ]
    }

    const { start, end, size, type } = req.query;
    console.log(start, end, size, type);

    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const pageSize = parseInt(req.query.pageSize) || 10; // default to 10 items per page if not specified

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedProducts = data.projects.slice(startIndex, endIndex);

    res.status(200).json({
        page,
        pageSize,
        totalPages: Math.ceil(data.projects.length / pageSize),
        totalItems: data.projects.length,
        items: paginatedProducts,
    });
    // res.status(200).json({ name: 'John Doe' })
}