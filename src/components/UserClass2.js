import React from "react";
class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "UserClass2 constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "UserClass ComponenDidMount");
  }
  render() {
    return console.log(this.props.name + "UserClass2 render");
  }
}
export default UserClass2;
