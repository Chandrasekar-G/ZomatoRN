import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import RestaurantCard from "../components/RestaurantCard";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoading: false
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getRestaurants(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  getRestaurants = (lat, lon) => {
    this.setState({ isLoading: true });
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
      {
        method: "GET",
        headers: { "user-key": "6edf62dbdf6352b7d1f87d81fe4ad470" }
      }
    ).then(res => {
      res.json().then(restaurants => {
        this.setState({ restaurants: restaurants.nearby_restaurants });
        console.log(this.state.restaurants);
        this.setState({ isLoading: false });
      });
    });
  };

  renderRestaurants = item => {
    let restaurant = item.item.restaurant;
    return <RestaurantCard restaurantItem={restaurant} />;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={styles.loaderView}>
            <ActivityIndicator size="large" color="#E20025" />
          </View>
        ) : (
          <FlatList
            data={this.state.restaurants}
            renderItem={this.renderRestaurants}
            keyExtractor={item => item.restaurant.id}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center'
  }
});
