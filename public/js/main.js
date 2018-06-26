const apiCLient = axios.create();
const $list = $('#list');
const $getBooks = $('#get-books');
const $addBook = $('#form button');
const $title = $('#title');
const $author = $('#author');
const $pages = $('#pages');

$getBooks.on('click', () => {
//immediately making an API to call to retrieve when the page first loads
apiCLient({ method: 'get', url: '/api/books' }).then((apiResponse) => {
    //after receiving data loop throiugh it and append an <li>
    const books = apiResponse.data
    books.forEach((b) => {
        $list.append(`
                <li id="${b._id}">
                    ${b.title}, ${b.author}, ${b.pages}<button class="delete">x</button>
                </li>
            `)
        })
    })
});

$list.on('click', '.delete', function() {
    const bookId = $(this).parent().attr('id')
    apiCLient({ method: 'delete', url: `/api/books/${bookId}` }).then((apiResponse) => {
        console.log(apiResponse)
        //$(this).parent().remove()
        $('#' + bookId).fadeOut(function() {
            $(this).remove()
        })
    })
});

$addBook.on('click', function() {
    const formData = {
        title: $title.val(),
        author: $author.val(),
        pages: $pages.val()
    }
    apiCLient({ method: 'post', url: '/api/books', data: formData }).then((apiResponse) => {
        const book = apiResponse.data.book
        console.log(apiResponse.data)
            $list.append(`
                <li id="${book._id}">
                ${book.title}, ${book.author}, ${book.pages}<button class="delete">x</button>
                </li>
            `)
        })
    });
