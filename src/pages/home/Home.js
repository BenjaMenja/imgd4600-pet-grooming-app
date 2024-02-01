import {Button} from "reactstrap";


function Home() {


   return (
      <>
         <h1>Welcome!</h1>
         <Button color={'primary'} onClick={() => window.location.href="/pet-grooming-app/learn"}>
            Learn
         </Button>
         <br/><br/>
         <Button color={'primary'} onClick={() => window.location.href="/pet-grooming-app/practice"}>
            Practice!
         </Button>
         <br/><br/>
         <Button color={'primary'} onClick={() => window.location.href="/pet-grooming-app/schedule"}>
            Schedule Your Care
         </Button>
      </>
   )
}

export default Home