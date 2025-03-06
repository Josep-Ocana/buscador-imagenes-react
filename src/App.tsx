import SearchForm from "./components/SearchForm"


function App() {
  

  return (
    <>
      <header className="bg-teal-600 p-4">
        <h1 className="text-5xl text-white text-center uppercase">Buscador Imagenes Pepe</h1>
      </header>

      <div className="container mx-auto p-10">
        <SearchForm/>
      </div>
    </>
  )
}

export default App
