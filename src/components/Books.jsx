import BookCard from './BookCard';

const Books = ({data}) => {
    // console.log(Array.isArray(data));
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //         console.log(data)
    //     })
    // },[])
    // const booksData = fetch("booksData.json").then(res => res.json());
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(book => <BookCard book={book} key={book.bookId}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;