// App.js
import React from 'react';
/*import IdCard from './components/IdCard';

const App = () => {
  return (
  <div> 
        <div>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture ="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores'
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
    </div>
  );
};

*/

import Greetings from './components/Greetings';

const App = () => {
  return (
    <div>
      <button> <Greetings lang="de">Ludwig</Greetings></button>
     <button>   <Greetings lang="fr">François</Greetings></button>    
    </div>
  );
};


export default App;