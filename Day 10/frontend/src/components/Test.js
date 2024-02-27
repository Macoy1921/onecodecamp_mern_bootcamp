import React from 'react';
import Image1 from '../assets/pikachu.png';


const Test = () => {
    return (
        <div>
            <img src={Image1} alt="pikachu" />
        </div>
    )
}

class Test2 extends React.Component {
   constructor(props) {
       this.state = "Hi, Class!";
   }

                 render() {
                 return (
                <h1>
                Hello, React!
                </h1>
       );
   }

}


//class component





//function component
//Life Cycle
//1. Initial
//2. Mounting
//3.Unmounting
//4. Updating

//State = specific to a component alone

//React hooks
//useEffectuseState