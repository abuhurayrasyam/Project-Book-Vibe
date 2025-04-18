const getFromLocalStorage = () => {
    const storedBookString = localStorage.getItem("readBookList");

    if(storedBookString) {
        const storedBookData = JSON.parse(storedBookString);
        return storedBookData;
    }
    else {
        return [];
    }
}

export const addToLocalStorage = (id) => {
    const storedBookData = getFromLocalStorage();

    if(storedBookData.includes(id)) {
        alert("This Item Already in Local Storage!")
    }
    else {
        storedBookData.push(id);
        const setData = JSON.stringify(storedBookData);
        localStorage.setItem("readBookList", setData);
    }
}