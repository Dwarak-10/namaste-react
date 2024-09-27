import React from "react";
import UserClass2 from "./UserClass2";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    // console.log(this.props.name + "Child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar: json.avatar_url,
      },
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component will Unmount");
  }
  render() {
    // console.log(this.props.name + "Child render");
    const { name, location, avatar } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar} />
        <h2>
          Name:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => loggedInUser}
          </UserContext.Consumer>
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akashaymarch7</h4>
      </div>
    );
  }
}
export default UserClass;
