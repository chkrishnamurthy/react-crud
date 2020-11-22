import React from "react";
import Form from "./Form";
import List from "./List";
import "./index.css";

class Index extends React.Component {
  state = {
    list: [],
    id: null,
    inputWord: "",
    DeleteDisable: false,
  };

  inputHandler = (e) => {
    this.setState({ inputWord: e.target.value });
  };

  formSubmitted = (e) => {
    e.preventDefault();
    if (!this.state.inputWord) {
      alert("Please Enter ...");
    } else {
      this.setState({
        list: [...this.state.list, this.state.inputWord],
        inputWord: "",
      });
    }
  };

  deleteList = (index) => {
    this.setState({ list: this.state.list.filter((v, i) => i !== index) });
  };

  editList = (index) => {
    this.setState({
      id: index,
      inputWord: this.state.list.filter((v, i) => i == index).toString(),
      DeleteDisable: true,
    });
  };

  updatedata = (e) => {
    e.preventDefault();
    if (!this.state.inputWord) {
      alert("Please Enter...");
    } else {
      const new_state = Object.assign({}, this.state).list;
      new_state[this.state.id] = this.state.inputWord;
      this.setState({
        list: new_state,
        id: null,
        inputWord: "",
        DeleteDisable: false,
      });
    }
  };

  render() {
    const { inputWord, id, list, DeleteDisable } = this.state;
    return (
      <div className="container p-3 my-3 bg-dark text-white">
        <div className="d-flex justify-content-center">
          <Form
            formSubmit={this.formSubmitted}
            inputHandle={this.inputHandler}
            inputData={inputWord}
            id={id}
            updateData={this.updatedata}
          />
        </div>
        <div>
          <List
            data={list}
            deleteData={(index) => this.deleteList(index)}
            edit={(index) => this.editList(index)}
            DeleteDisable={DeleteDisable}
            id={id}
          />
        </div>
      </div>
    );
  }
}

export default Index;
