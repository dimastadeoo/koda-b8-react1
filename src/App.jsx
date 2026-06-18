import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = "Count Number Up to 10";
  }, []);

  const buttonPlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const buttonMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-[#61c261] p-8 rounded-2xl shadow-lg text-center max-w-sm w-full mx-4">
        
        <h1 className="text-2xl font-bold text-white mb-2">Button Plus Minus</h1>
        <p className="text-sm text-black-500 mb-6">Angka yang bisa di klik hanya (0 -10)</p>


        <div className="flex justify-center gap-6 items-center">
          
          {/* Button Kurang (-) */}
          <button
            onClick={buttonMinus}
            disabled={count === 0}
            className={`h-fit px-6 py-3 rounded-xl font-bold text-md transition-all duration-200 
              ${count === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-red-500 text-white hover:bg-red-600 active:scale-95 shadow-md hover:shadow-red-200'
              }`}
          >
            - Kurang
          </button>

          <div className="text-3xl font-black text-indigo-600 tracking-wider">
          {count}
        </div>

          {/* Button Tambah (+) */}
          <button
            onClick={buttonPlus}
            disabled={count === 10}
            className={`h-fit px-6 py-3 rounded-xl font-bold text-md transition-all duration-200 
              ${count === 10 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 shadow-md hover:shadow-green-200'
              }`}
          >
            Tambah +
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
