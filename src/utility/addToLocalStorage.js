const getFromLocalStorage = (key) => {
    const storedDataString = localStorage.getItem(key);
    return storedDataString ? JSON.parse(storedDataString) : [];
}

const addToLocalStorage = (key, id) => {
    const storedData = getFromLocalStorage(key);

    if (storedData.includes(id)) {
        alert("This item is already in your list!");
    } else {
        storedData.push(id);
        localStorage.setItem(key, JSON.stringify(storedData));
    }
}

export { getFromLocalStorage, addToLocalStorage };
