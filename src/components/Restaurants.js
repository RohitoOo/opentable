import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Card, Button } from "antd";
import spinner from "../assets/images/spinner.gif";

let restaurants =[];

class Restaurants extends React.Component {
  state = {
    restaurants: [],
    loaded: false
  }

 
  componentDidUpdate(prevProps) {
    this.props.citySelected.length !== prevProps.citySelected.length &&
      axios
        .get(
          `http://opentable.herokuapp.com/api/restaurants?city=${this.props.citySelected}`
        )
        .then(res => {
          restaurants = res.data.restaurants;
          this.setState({
            restaurants,
            loaded: true
          })}
        )
        .catch( err => {
          console.log({err})
        })
  }

  render() {
    const { Meta } = Card;
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <Row gutter={48} type="flex" justify="space-around" align="middle">
              {this.state.restaurants.map((restaurant, i) => {
                let restaurant_details =
                  restaurant.address + " " + restaurant.city;
                return (
                  <Col
                    key={i}
                    value={100}
                    xs={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                  >
                    <Card
                      hoverable
                      cover={
                        <img alt={restaurant.name} src={restaurant.image_url} />
                      }
                    >
                      <Meta
                        title={restaurant.name}
                        description={restaurant_details}
                      />{" "}
                      <br />{" "}
                     
                        <a
                          alt="Reserve Table"
                          href={restaurant.reserve_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        > <Button type="danger">
                          Reserve Table</Button>
                        </a>{" "}
                      
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    citySelected: state.citySelected
  };
};

export default connect(mapStateToProps)(Restaurants);
