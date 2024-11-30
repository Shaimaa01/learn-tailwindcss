import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-dark h-screen">
        <h1 className="text-3xl font-bold  text-center  p-4">
          Hello <span className="text-blue-200">Tailwindcss</span> world!
        </h1>

        <div className="text-sm md:text-lg lg:text-xl text-center text-white p-2">
          Responsive text
        </div>

        <div className="max-w-lg mx-auto bg-gray-light rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-84 mr-12 object-cover md:h-full md:w-48"
                src="https://wallpaperaccess.com/thumb/1931126.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className=" text-black">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 hover:text-sky-400 text-[#50d71e]">The quick brown fox...</p>
      </div>
    </>
  );
}

export default App;
