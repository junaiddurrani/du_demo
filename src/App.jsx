
import CardList from './components/CardList'
import './index.css'

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Choose your Power Plan</h1>
      <CardList />
      {/* <div class="bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-orange-500 xl:bg-red-500 2xl:bg-purple-500 text-white">
        My Name is Junaid
      </div> */}

    </div>
  )
}

export default App