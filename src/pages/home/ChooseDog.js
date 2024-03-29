// This will be a new-user page

import React, {useState} from 'react';
import GoldenRetriever from "../../images/dogs/golden-retriever-teeth.png";
import ShihTzu from "../../images/dogs/shih-tzu-long-hair.png";
import Dobermann from "../../images/dogs/dobermann-teeth.jpg";
import {initializeTasks} from "../../TaskList";

const dogOptions = [
   {id: 1, name: 'Golden Retriever', image: GoldenRetriever, internalName: "golden_retriever"},
   {id: 2, name: 'Shih Tzu', image: ShihTzu, internalName: "shih_tzu"},
   { id: 3, name: 'Dobermann', image: Dobermann, internalName: "dobermann"},
];

function ChooseDog() {
   const [selectedDog, setSelectedDog] = useState(null);
   const handleDogSelect = (dog) => {
      setSelectedDog(dog);
   };

   const handleNavigation = () => {
      if (selectedDog) {
         initializeTasks();
         localStorage.setItem("dogapp-breed", selectedDog.internalName);

         window.location.reload()
      } else {
         alert('Choose a dog breed before proceeding');
      }
   }

   return (
      <div style={{textAlign: 'center'}}>
         <h1>Welcome New User!</h1>
         <h3>Choose your preferred dog breed:</h3>
         <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px'}}>
            {dogOptions.map((dog) => (
               <div key={dog.id} onClick={() => handleDogSelect(dog)} style={{cursor: 'pointer'}}>
                  <img
                     src={dog.image}
                     alt={dog.name}
                     style={{width: '150px', height: '150px', border: selectedDog === dog ? '2px solid #00f' : 'none'}}
                  />
                  <p style={{textAlign: 'center'}}>{dog.name}</p>
               </div>
            ))}
         </div>
         {selectedDog && (
            <div>
               <h3>You've chosen: {selectedDog.name}</h3>
               <img src={selectedDog.image} alt={selectedDog.name} style={{width: '300px', height: '300px'}}/>
               <button onClick={handleNavigation} style={{marginTop: '20px'}}>Choose {selectedDog.name}?</button>
            </div>
         )}
      </div>
   );
}

export default ChooseDog;
