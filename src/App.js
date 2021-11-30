import Profile from ".//profile/profile";
import Photo from "./profile/profilePhoto.jpg";
import "./App.css";
export default function App() {
  const oppe = () => {
    return alert("Thanks for being awesome!");
  };
  return (
    <div className='do'>
      <div className="App">
        <Profile fullname="Ahmed Shembesh" Photo={Photo} alert={oppe} age={29} />
      </div>
    </div>
  );
}
