import { routes, navigate } from "@redwoodjs/router";
import { useAuth } from "@redwoodjs/auth"
import Button from "@material-ui/core/Button"

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { logIn, isAuthenticated, currentUser, logOut } = useAuth();

  const toggleAuth = async () => {
    if (isAuthenticated) {
      await logOut();
      // navigate(routes.home());
    } else {
      await logIn();
    }
  };

  return (
    <>
      <header style={{padding: "5px"}}>
        <span style={{color: "aquamarine", fontSize: "30px"}}>Ethchievements</span>

        <Button onClick={toggleAuth} variant="contained" style={{float: "right", backgroundColor: "aquamarine", color: "white", border: "none", borderRadius: "3px"}} >{isAuthenticated ? currentUser.address : "CONNECT"}</Button>
      </header>
      {children}
    </>
  )
}

export default DefaultLayout
