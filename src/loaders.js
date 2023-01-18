
const URL = "https://cheese-app.onrender.com"

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese");
    const cheese = await response.json();
    console.log(cheese)
    return cheese;
}

export const cheesesLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id);
    const cheeses = await response.json();
    return cheeses;
}

