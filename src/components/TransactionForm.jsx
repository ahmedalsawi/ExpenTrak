import React from "react";

import moment from "moment";

import Select from "./utils/Select";
import SelectMultiple from "./utils/SelectMultiple";

import axios from "axios";
import { apiURI } from "../services/api";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialValue = {
      title: "",
      amount: 0,
      date: moment().format("YYYY-MM-DD"),
      category: null,
      labels: [],
    };
    this.state = this.initialValue;
    this.label = [];
    this.category = [];
  }

  componentWillMount = () => {
    axios.get(apiURI.labelsURI).then((res) => {
      this.label = res.data;
    });
    axios.get(apiURI.categoryURI).then((res) => {
      this.category = res.data;
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to backend
    this.props.handleAdd(this.state);
    // clear the form on submit
    this.setState(this.initialValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="title"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="amount"
            type="number"
            step="0.01"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>

        <Select
          className="form-control"
          name="category"
          onChange={this.handleChange}
          value={this.state.category}
          options={this.category.map((item) => {
            return {
              name: item.name,
              value: item.id,
            };
          })}
        ></Select>

        <SelectMultiple
          className="form-control"
          name="labels"
          onChange={(this, this.handleChange)}
          value={this.state.labels}
          options={this.label.map((item) => {
            return {
              name: item.name,
              value: item.id,
            };
          })}
        ></SelectMultiple>

        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}
