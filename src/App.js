import React from "react";
import "./App.css";
import context from "./context";
import InputField from "./components/InputField";
//import FetchUsers from "./components/FetchUsers";
import ShowData from "./components/ShowData";

const ContextProvider = context.Provider;

/******************/
function fetchUsers(inputValue) {
  const URL = `https://api.github.com/search/users?q=${inputValue}`;
  return fetch(URL).then((res) => res.json());
}
/******************/

class App extends React.Component {
  state = {
    users: [],
    inputValue: "",
    isLoading: true,
  };

  handelUserSearch = (e) => {
    const inputValue = this.state.inputValue;
    if (inputValue) {
      fetchUsers(inputValue).then((body) => {
        this.setState({
          users: body.items,
          isLoading: false,
        });
      });
    }

    this.setState({ inputValue: e.target.value });
  };

  render() {
    const contextValue = {
      users: this.state.users,
      inputValue: this.state.inputValue,
      isLoading: this.state.isLoading,
      handelUserSearch: this.handelUserSearch,
    };

    return (
      <ContextProvider value={contextValue}>
        <div className="App">
          <h1>Github users search App.</h1>
          <InputField />
          <ShowData />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
