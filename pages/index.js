export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const { data } = await res.json();
  
    return {
      props: { products: data },
    };
  }
  
  export default function Home({ products }) {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Liquor Store Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-md p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  