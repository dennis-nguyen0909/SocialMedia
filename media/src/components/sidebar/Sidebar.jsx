import './sidebar.css'
import {RssFeed , Chat, Videocam,Group,Bookmark,QuestionAnswer,Work,EventBusy} from '@material-ui/icons'
function Sidebar() {
    return ( <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <Videocam className='sidebarIcon' />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon' />
                    <span className="sidebarListItemText">Grops</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon' />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <QuestionAnswer className='sidebarIcon' />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <Work className='sidebarIcon' />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventBusy className='sidebarIcon' />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon' />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className='sidebarButton'>ShowMore</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/img/Image (2).png" alt="" />
                    <span className='sidebarFriendName'>Minh Duy</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/img/Image (2).png" alt="" />
                    <span className='sidebarFriendName'>Minh Duy</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/img/Image (2).png" alt="" />
                    <span className='sidebarFriendName'>Minh Duy</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/img/Image (2).png" alt="" />
                    <span className='sidebarFriendName'>Minh Duy</span>
                </li>
            </ul>
        </div>
     
    </div> );
}

export default Sidebar;


