import CardItem from '../components/CardItem';
import DataItems from '../data/items.json'

const Store = () => {
    return (
        <main className="container mx-auto">
           <h1 className='text-gray-500 text-2xl my-3'>Store</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {DataItems.map(item => (<CardItem key={item.id} {...item} />) )}
           </div>
        </main>
    );
}

export default Store;