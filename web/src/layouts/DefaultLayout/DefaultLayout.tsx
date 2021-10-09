import { routes, navigate, Link } from "@redwoodjs/router";
import { useAuth } from "@redwoodjs/auth"
import Button from "@material-ui/core/Button"

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { logIn, isAuthenticated, currentUser, logOut } = useAuth();

  const toggleAuth = async () => {
    if (isAuthenticated) {
      // await logOut();
      navigate("/collection/" + currentUser.address);
    } else {
      await logIn();
    }
  };

  return (
    <>
      <header style={{padding: "5px", margin: "0% 7%"}}>
        <Link to={routes.home()} style={{color: "aquamarine", fontSize: "30px"}}>Ethchievements</Link>
        <img style={{height: "30px", position: "relative", top: "5px"}} src="http://localhost:8910/eeth2.png" />

        <Button onClick={toggleAuth} variant="contained" style={{float: "right", backgroundColor: "aquamarine", color: "white", border: "none", borderRadius: "3px"}} >{isAuthenticated ? currentUser.address : "CONNECT"}</Button>
      </header>
      {children}
    </>
  )
}

export default DefaultLayout
