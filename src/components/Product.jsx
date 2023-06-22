const Products = ({id,name,price})=>{
    return(
        <div className="card">
            <div>ID: {id}</div>
            <div>Nama:{name}</div>
            <div>Harga:{price.toLocaleString("id-ID",{style:"currency",currency:"IDR"})}</div>
        </div>
    )
}
export default Products