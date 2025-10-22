const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: "Alice",
            age: 35,
        },
        available: false,
        price: "101€",
        tags: ["advanced", "js", "react", "senior"],
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: "Bob",
            age: 20,
        },
        available: true,
        price: "25€",
        tags: ["advanced", "js", "mid-senior"],
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: "Alice",
            age: 17,
        },
        available: true,
        price: "8€",
        tags: ["html", "css", "junior"],
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: "Charlie",
            age: 50,
        },
        available: false,
        price: "48€",
        tags: ["html", "advanced", "junior", "mid-senior"],
    },
];

const availableBooks = books.filter((book) => {
    return book.available;
});

const discountedBooks = availableBooks.map((book) => {
    const priceNum = parseFloat(book.price.replace("€", ""));
    const discountedPrice = +(priceNum * 0.8).toFixed(2);
    return {
        ...book,
        price: `${discountedPrice}€`,
    };
});

const fullPricedBook = discountedBooks.find((book) => {
    const priceNum = parseFloat(book.price.replace("€", ""));
    return priceNum % 1 === 0;
});

console.log(discountedBooks);
console.log(fullPricedBook);
