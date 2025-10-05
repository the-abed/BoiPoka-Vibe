/// store with id
/// store to localStorage 
/// array or collection 
/// if book already exist show a alert
/// if book doesn't exist push in the collection or array

const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readlist")

    if (storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) =>{
    const storedBookData = getStoredBook();
    if ( storedBookData.includes(id)){
        alert('vai ei id already exist')
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data)
    }

}

export {addToStoreDB,getStoredBook};