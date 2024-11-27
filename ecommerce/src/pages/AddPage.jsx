import {useState} from "react";
import Header from "../components/Header";
import {nanoid} from "nanoid";

export default function AddPage({products, setProducts}) {
    const [newProduct, setNewProduct] = useState({
        id: nanoid(),
        name: "",
        description: "",
        price: "",
        stars: "",
        percentDiscount:"",
        image: "",
        discountCode:""
    });
    function handleChange(e){
        const {name, value} = e.target;
        let parsedValue;

        switch(name){
            case "price":
                parsedValue = parseFloat(value);
                break;
            case "percentDiscount":
                parsedValue = parseInt(value);
                break;
            default:
                parsedValue = value;                
        }
        setNewProduct({
            ...newProduct,
            [name]: parsedValue
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        setProducts([...products, newProduct]);
        setNewProduct({
            id: nanoid(),
            name: "",
            description: "",
            price: "",
            stars: "",
            percentDiscount:"",
            image: "",
            discountCode:""
        });
    }
    return(
        <>
            <Header search="" setSearch="" page="add"/>
            <main>
                <h1>Add a New Product</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter product name"
                        value={newProduct.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter product description"
                        value={newProduct.description}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Enter product image"
                        value={newProduct.image}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="discountCode">Discount Code:</label>
                    <input
                        type="text"
                        id="discountCode"
                        name="discountCode"
                        placeholder="Enter product discount code"
                        value={newProduct.discountCode}
                        onChange={handleChange}
                    />
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter product price"
                        value={newProduct.price}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="stars">Stars:</label>
                    <input
                        type="text"
                        id="stars"
                        name="stars"
                        placeholder="Enter product stars"
                        value={newProduct.stars}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>

                <h2>Product List</h2>
                <ul>
                    {getProducts.map((product) => (
                        <li key-={product.id}>
                            {product.name} - {product.description} - {product.image} - {product.price} - {product.stars} - 
                        </li>    
                    ))}
                </ul>
            </main>
        </>
    )
}