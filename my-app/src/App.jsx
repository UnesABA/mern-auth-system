import Feed     from "./components/feed/Feed"
import Rightbar from "./components/rightbar/Rightbar"
import Sidebar  from "./components/sidebar/Sidebar"
import Topbar   from "./components/topbar/Topbar"
import "./index.css"

function App() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default App
