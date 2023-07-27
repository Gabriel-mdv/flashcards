import Image from 'next/image'
import { products } from './products'
import Navbar from './components/navbar'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')

  const data = await res.json()
 
  console.log('hello')
  console.log(data)
  return data;

}

export default async function ProductNotes(){
  console.log('helllo world.........................')
  console.log('hwllo gabrie')
  console.log(products)


  return(
    <div>
      <Navbar />

      {/* <div className='flex flex-wrap'>
      {
        products.map((product: any) => {
          return(
            <div key={product.id} className="border p-4 mb-4 ml-5">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
          )

        }) 
      } */}
      {/* </div> */}

      <div className='pt-10'>

        <div className='front-card w-[300px] h-[400px] border px-3 py-4 relative rounded-lg bg-[#efdeb4]'>
          <div className='flex justify-between'>
            <h2>Question</h2>
            <p>1/20</p>
          </div>

          <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>What is your favorite food</p>


          <p className='absolute bottom-0'> Click to flip</p>
        </div>
      </div>
    </div>
  )
}
