import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../Utilities/addToDB';
import BookCard from '../components/BookCard';


const ReadList = () => {
    const [readList,setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect(()=>{
        const storedBook = getStoredBook()
        const convertedStoredBooks = storedBook.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])

    const handleSort = (type)=>{
        setSort(type)
        if(type === "pages") {
            const sortByPage = [...readList].map((a, b) => a.totalPages - b.totalPages)
            setReadList(sortByPage);
        }
        if(type === "ratings") {
            const sortByPage = [...readList].map((a, b) => a.rating - b.rating)
            setReadList(sortByPage);
        }
    }
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab>Your Read List</Tab>
      <Tab>My Wishlist</Tab>
    </TabList>

    <TabPanel>
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort : {sort?sort:""}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleSort("pages")}><a>By Pages</a></li>
    <li onClick={()=>handleSort("ratings")}><a>By Rating</a></li>
  </ul>
</div>
      <h2>Book I Read</h2>
      {
        readList.map(b => <BookCard key={b.bookId} book={b}></BookCard>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;