function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + author + pages + read);
    }
}

const checkBook = new Book('The Hobbit, ', 'J.R.R. Tolkien, ', '295 pages, ', 'not read yet');

checkBook.info();
console.log(checkBook.info());


const fruit = {
    isFruit: false,
    printInfo: function() {
        return (`I am a ${this.name}, and it is ${this.isFruit} that I am a vegetable.`);
    }
};

const spinach = Object.create(fruit);

spinach.name = 'spinach';
spinach.isFruit = true;

console.log(spinach.printInfo());