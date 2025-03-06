

export default function SearchForm() {
  return (
    <form className="space-y-5 border p-5 rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <label 
            htmlFor="expenseName"
            className="text-xl"
          >Busca una imagen:</label>
          <input 
            type="text"
            id="expenseName"
            placeholder="Pon una palabra: coche, muñeca, pelota..."
            className="bg-slate-100 py-2"
            name="expenseName"             
            
          />
        </div>  

        <input 
          type="submit"
          className="bg-teal-600 hover:bg-teal-900 cursor-pointer w-full p-2 text-white upperecase font-bold rounded-lg"
          value="Buscar"
          
          />

      </form>
  )
}
