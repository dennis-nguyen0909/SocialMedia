import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbars/Topbar";
import Feed from "../../components/feed/Feed";
import './home.css'
function Home() {
    return (
    <>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />    
            <Rightbar />
        </div>
    </>  
    );
}

export default Home;