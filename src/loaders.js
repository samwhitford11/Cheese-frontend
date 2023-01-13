const URL = "https://cheese-app.onrender.com"

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese");
    const cheese = await response.json();
    return cheese;
}