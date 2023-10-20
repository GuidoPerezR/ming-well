import DrawingsPage from "./drawings/DrawingsPage";
import Navbar from "../components/Navbar";
import AudioBooks from "./audiobooks/AudioBooks";

function MainPage() {
  return (
    <div id="main-body">
      <Navbar />
      <div>
        <h1 className="text-center">Ming Well</h1>
      </div>
      <DrawingsPage />;
      <AudioBooks />
    </div>
  );
}

export default MainPage;
