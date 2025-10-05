import React from 'react';
import Banner from '../components/Banner';
import Books from '../components/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Books data={booksData}></Books>
        </div>
    );
};

export default Home;