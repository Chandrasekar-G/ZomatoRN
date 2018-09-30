import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";

export default class RestaurantCard extends React.Component {
  static propTypes = {
    restaurantItem: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    let restaurant = this.props.restaurantItem;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.logo}
            source={{ uri: restaurant.featured_image }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.location}>{restaurant.location.address}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    width: "95%",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 3,
    elevation: 3
  },
  imageContainer: {
    flex: 1
  },
  logo: {
    flex: 1
  },
  infoContainer: {
    flex: 3,
    padding: 10,
    alignItems: "center"
  },
  name: {
    fontWeight: "bold"
  },
  location: {
    color: "#808080",
    fontSize: 12,
    marginTop: 5
  }
});
