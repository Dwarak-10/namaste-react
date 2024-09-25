import React from "react";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <UserClass name="Billa" location="Dehradun class" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <UserClass name="First " location="Dehradun class" />
      </div>
    );
  }
}

export default About;
