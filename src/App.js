import "./App.css";
import SocialIcons from "./components/SocialIcons";
function App() {
  return (
    <>
      <div className="container mx-auto">
        <header className="bg-gray-800 text-white p-4">
          <div
            className="container mx-auto flex 
									justify-between items-center"
          >
            <h1 className="text-2xl font-bold">Social Icons</h1>
            <nav>
              <SocialIcons />
            </nav>
          </div>
        </header>
        <main
          className="py-8 text-center h-300 
								flex items-center"
        >
          <h1>
            A Computer Science portal for geeks. It contains well written, well
            thought and well explained computer science and programming
            articles, quizzes and practice/competitive programming/company
            interview Questions.
          </h1>
        </main>
        <footer className="bg-gray-800 text-white p-4">
          <div
            className="container mx-auto flex 
									justify-between items-center
									text-center"
          >
            <nav>
              <ul
                className="flex space-x-4 
										animation-stopped"
              >
                <SocialIcons />
              </ul>
            </nav>
            <p className="text-red-500">© 2024 All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
