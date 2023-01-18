import { redirect } from "react-router-dom";

const URL = "https://cheese-app.onrender.com";
//Create Action
export const createAction = async ({ request }) => {
    const formData = await request.formData();

    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
        
    };
    
    await fetch(URL + '/cheese', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheese),
    });

    return redirect('/');
};

//Update Action
export const updateAction = async ({request,params}) => {
    const formData = await request.formData();
    const updatedCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
        
    };
    await fetch(URL + "/cheese/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCheese)
    });
    return redirect('/');
};

//Delete Action
export const deleteAction = async ({params}) => {
    await fetch(URL + "/cheese/" + params.id, {
        method: 'delete',
    });
    return redirect('/');
}