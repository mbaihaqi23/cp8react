import Counting1 from './counting1';
import Counting2 from './counting2';
import Profile from './Profile';
import Sekolah from './Sekolah';
import Post from './Post';

function App() {

    const postObject = {
        title: "Boku no Hero",
        body: "Anime of japan",
    };

  return (
    <div>
        <Profile/>
        <p></p>
        <hr/>
        <p>
        <Sekolah/>
        <hr/>
        <Post posting={postObject}/>
        <hr/>
        <Counting1/>
        <Counting2/>
        </p>
    </div>
    
  );
}

export default App;
