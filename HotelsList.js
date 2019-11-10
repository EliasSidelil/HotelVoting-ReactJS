import React from "react";
import HotelDetails from "./HotelDetails";
import Hotels from "./Hotels";

class Component extends React.Component {
  state = {
    hotels: []
  };

  componentDidMount() {
    this.setState({
      hotels: HotelDetails
    });
  }

  voteHandler = hotelId => {
    const voteHotel = this.state.hotels.map(owner => {
      if (hotelId === owner.id) {
        return Object.assign({}, owner, {
          votes: owner.votes + 1
        });
      } else {
        return owner;
      }
    });

    this.setState({
      hotels: voteHotel
    });
  };
  render() {
    //sort hotels with highest votes

    let sortHotels = this.state.hotels.sort((a, b) => {
      return b.votes - a.votes;
    });
    const hotels = sortHotels.map(hotel => (
      <Hotels
        key={hotel.id}
        id={hotel.id}
        name={hotel.name}
        votes={hotel.votes}
        imageUrl={hotel.imageUrl}
        locationUrl={hotel.locationUrl}
        voteHotel={this.voteHandler}
      />
    ));
    return <div className="ui divided unstackable items main">{hotels}</div>;
  }
}

export default Component;
