import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this.getRestaurants(13.08268, 80.270721);
  }

  getRestaurants = (lat, lon) => {
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
      });
    });
  };

  renderRestaurants = (item) => {
      let restaurant = item.item.restaurant;
      return (
          <Text>{restaurant.name}</Text>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.restaurants}
          renderItem={this.renderRestaurants}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
