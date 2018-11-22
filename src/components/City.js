import React from "react";
import axios from "axios";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import spinner from "../assets/images/spinner.gif";

let cities = [];
let dataSource = [];
class City extends React.Component {
  state = {
    cities: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("http://opentable.herokuapp.com/api/cities")
      .then(res => {
        // Categorize Cities Based On Country Or Area ( SUGGESTION ) 
         cities = res.data.cities.splice(0,200)
        this.setState({
          cities,
          loading: false
        });
      })
      .catch(err => {
        console.log("Something Went Wrong!");
        console.log({ err });
      });
  }
  handleSelect = citySelected => {
    // Update State With Redux
    this.props.handleSelectCity(citySelected);
    this.props.history && this.props.history.push("/restaurants");
  };

  render() {
     dataSource = this.state.cities;

    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              style={{
                width: "50%",
                height: "50%"
              }}
              alt="spinner"
              src={spinner}
            />
          </div>
        ) : (
          <div>
            <AutoComplete
              onSelect={this.handleSelect}
              style={{ width: "100%" }}
              dataSource={dataSource}
              placeholder="Select Your City"
              filterOption={(inputValue, option) =>
                option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSelectCity: citySelected => {
      dispatch({ type: "SHOW_RESTAURANTS", citySelected: citySelected });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(City);
