import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const cheese = useLoaderData();

    return (
        <div>
            <h2> Add cheese</h2>
            <Form action='/create' method='post'>
                <input type="input" name="name" placeholder="cheese's name"/>
                <input type="input" name="image" placeholder="cheese's picture"/>
                <input type="input" name="countryOfOrigin" placeholder="origin of cheese"/>

                <input type="submit" value="add new cheese"/>

            </Form>

            <h2> Cheese </h2>
            <div className="container"> 
            {cheese.map(cheese => (
                <div className="card" key={cheese._id}>
                    <Link to={`/${cheese._id}`} className="cheeses">
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name}/>
                    <h3>{cheese.countryOfOrigin}</h3>
            
                </div>
           ))}   
           </div>  
        </div>
    )
}

export default Index;