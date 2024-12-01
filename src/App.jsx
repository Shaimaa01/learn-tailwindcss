import "./App.css";
import Button from "./Button";

function App() {
  return (
    <>
      <div className="bg-gray-dark h-screen">
        <h1 className="text-3xl font-bold text-center p-4">
          Hello <span className="text-blue-200">Tailwindcss</span> world!
        </h1>

        <div className="text-sm md:text-lg lg:text-xl text-center text-white p-2">
          Responsive text
        </div>

        <div className="max-w-lg mx-auto  rounded-xl shadow-md overflow-hidden  md:max-w-xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-84 mx-auto rounded-md object-cover  md:h-full md:w-48"
                src="https://wallpaperaccess.com/thumb/1931126.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wider text-sm text-gray-100 font-bold italic text-center ">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="text-slate-400 hover:text-sky-400 leading-loose">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
        <Button>Click Me </Button>
      </div>

      
    </>
  );
}

export default App;
