import {Button} from "reactstrap";
import {Link} from "react-router-dom";


function Home() {


   return (
      <>
         <h1>Welcome!</h1>
         <Link className="nav-button" to="/practice">
            Practice!
         </Link>
         <br/><br/>
         <Link className="nav-button" to="/schedule">
            Your Care Schedule
         </Link>
      </>
   )
}

export default Home