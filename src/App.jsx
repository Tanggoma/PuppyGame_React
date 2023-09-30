

//router 
import { createBrowserRouter } from "react-router-dom"
import { Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

//pages 
import Start from "./components/Start"
import Home from "./components/Home"
import SinglePlayer, { playerDetailsLoader } from "./components/SinglePlayer"
import NewPlayerForm from "./components/NewPlayerForm"
import AllPlayers, { playersLoader } from "./components/AllPlayers"

//layout
import Rootlayout from "./layout/Rootlayout"
import NotFound from "./components/Notfound"

//create BrowserRouter 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route index element={<Start />} />

      <Route path="/" element={<Rootlayout />}>
        <Route path="home" element={<Home />} />

        <Route
          path="players"
          element={<AllPlayers />}
          loader={playersLoader}
        />

        <Route
          path="/players/:id"
          element={<SinglePlayer />}
          loader={playerDetailsLoader}
        />

        <Route path="create" element={<NewPlayerForm />} />
      </Route>


      <Route path="*" element={<NotFound />} />

    </Route>

  )
)


function App() {

  // const [data, setData] = useState([]);

  // useEffect(() => {

  //   const fecthData = async () => {
  //     try {
  //       // const response = await fetch('http://localhost:3000/puppy',);
  //       const response = await fetch('https://tanggoma-react-puppy-bowl.netlify.app/puppy',);

  //       const data = await response.json();
  //       // console.log(data);
  //       setData(data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fecthData();

  // }, [])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
