import { useSelector } from "react-redux";

function UserList({searchKey}) {
    const { allUsers } = useSelector(state => state.userReducer);

    return (
        allUsers.filter(u=> (u.firstName.toLowerCase().includes(searchKey) || u.lastName.toLowerCase().includes(searchKey)) && searchKey)
            .map(user => {
                return (
                    <div class="user-search-filter">
                        <div class="filtered-user">
                            <div class="filter-user-display">
                                { user.profilePic && <img src={user.profilePic} alt="Profile Pic" class="user-profile-image" />}
                                {   !user.profilePic && <div class="user-default-profile-pic">
                                        {user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}
                                    </div>
                                }
                                <div class="filter-user-details">
                                    <div class="user-display-name">{user.firstName} {user.lastName}</div>
                                    <div class="user-display-email">{user.email} </div>
                                </div>
                                <div class="user-start-chat">
                                    <button class="user-start-chat-btn">Start Chat</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                )    
            })
    );
}

export default UserList;