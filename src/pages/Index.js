import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const cheese = useLoaderData();

    return (
        <div>
            <h2> Add cheese</h2>
            <Form action='/create' method='post'>
                <input type="input" name="name" placeholder="cheese's name"/>
                <input type="input" name="image" placeholder="cheese's picture"/>
                <input type="input" name="countryOfOrigin" placeholder="where the cheese is from"/>

                <input type="submit" value="add new cheese"/>

            </Form>

            <h2> Cheese </h2>
            {cheese.map(cheeses => (
                <div>
                    <Link to={`/$cheeses._id}`} className="cheeses">
                        <h1>{cheeses.name}</h1>
                    </Link>
                    <img src={cheeses.image} alt={cheeses.name}/>
                    <h3>{cheeses.countryOfOrigin}</h3>
            
                </div>
            ))}    
        </div>
    )
}

export default Index;