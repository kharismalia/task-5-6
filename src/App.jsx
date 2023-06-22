import { useState } from "react"
import Products from "./components/Product"
import {BsFillPatchPlusFill} from "react-icons/bs"
import {AiTwotoneDelete} from "react-icons/ai"
import { ImPriceTag } from "react-icons/im"
import Header from "./components/Header";

const App = () => {
    const [data, setData] = useState({
        id: 0,
        name: "",
        price: 0,
    });
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "IPhone",
            price: 15000000,
        },
        {
            id: 2,
            name: "Samsung",
            price: 10000000,
        },
        {
            id: 3,
            name: "Xiaomi",
            price: 5000000,
        },
    ]);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value],
        });
    };

    return (
        <>
            <Header />
            <div className="app">
                {products.map((product) => (
                    <Products key={product.id} {...product} />
                ))}
            </div>
            <div className="form">
                <div
                    className="card"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    TAMBAH
                    <label>
                        ID:
                        <input
                            type="number"
                            name="id"
                            value={data.id}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Nama:
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Harga:
                        <input
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setProducts([data, ...products]);
                        }}
                    >
                        <BsFillPatchPlusFill size={16} /> tambah depan
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setProducts([...products, data]);
                        }}
                    >
                        <BsFillPatchPlusFill size={16} /> tambah belakang
                    </button>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    UPDATE/HAPUS BY ID
                    <label>
                        ID:
                        <input
                            type="number"
                            name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </label>
                    <label>
                        Nama:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setProducts(
                                    products.map((product) =>
                                        product.id == id
                                            ? { ...product, name: name }
                                            : product
                                    )
                                );
                            }}
                        />
                    </label>
                    <button
                        onClick={() =>
                            setProducts(
                                products.map((product) =>
                                    product.id == id
                                        ? {
                                              ...product,
                                              price: product.price + 1000000,
                                          }
                                        : product
                                )
                            )
                        }
                    >
                       <ImPriceTag /> Up Harga
                    </button>
                    <button
                        onClick={() =>
                            setProducts(
                                products.map((product) =>
                                    product.id == id
                                        ? {
                                              ...product,
                                              price: product.price - 1000000,
                                          }
                                        : product
                                )
                            )
                        }
                    >
                       <ImPriceTag /> Down Harga
                    </button>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    HAPUS
                    <button onClick={() => setProducts(products.slice(1))}>
                        <AiTwotoneDelete /> hapus depan
                    </button>
                    <button onClick={() => setProducts(products.slice(0, -1))}>
                        <AiTwotoneDelete /> hapus belakang
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;