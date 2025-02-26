import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
  const { userQuery, logoutMutation } = useContext(AuthContext);
  console.log(userQuery.data?.name);
  if (userQuery.isLoading) return <h1>Data is loading...</h1>;
  if (logoutMutation.isLoading) return <h1>Logout processing</h1>;
  return (
    <header>
      <div className="flex container">
        <Link to="/" className="text-2xl m-3">
          Metaverse Project
        </Link>
        <div className="flex absolute r-0">
          <Link to="/about" className="nav-button">
            About
          </Link>
          {/*<Link to="/faq" className="nav-button">
            FAQ
          </Link>
          <Link to="/community" className="nav-button">
            Community
  </Link>*/}
          <Link to="/play" className="nav-button">
            Play
          </Link>
          {userQuery.isError ? (
            <>
              <Link to="/signin" className="nav-button">
                Sign in
              </Link>
              <Link to="/signup" className="nav-button">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <a className="nav-button" onClick={logoutMutation.mutate()}>
                Log out
              </a>
              <Link to="/quiz" className="nav-button">
                Quiz
              </Link>
              <Link to="/play" className="nav-button">
                Play
              </Link>
              <Link to="/profile" className="nav-button">
                Profile
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
