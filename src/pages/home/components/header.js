import { useSelector } from "react-redux";

function Header() {
    const { user } = useSelector(state => state.userReducer);
    const getAbbreviation = () => {
        let f = user?.firstName[0].toUpperCase();
        let l = user?.lastName[0].toUpperCase();
        return f+''+l;
    };
    const getFullName = () => {
        let fname = user?.firstName.toUpperCase();
        let lname = user?.lastName.toUpperCase();
        return fname + ' ' + lname;
    };
    return (
        <div className="app-header">
            <div className="app-logo">
                <i className="fa fa-comments" aria-hidden="true"></i>
                Quick Chat
                </div>
            <div className="app-user-profile">
                <div className="logged-user-name">{getFullName()}</div>
                <div className="logged-user-profile-pic">{getAbbreviation()}</div>
            </div>
        </div>
    );
}

export default Header;