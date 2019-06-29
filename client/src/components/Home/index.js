import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Landing from '../Landing/index';

class Home extends Component {
  state = {
    pageList: ["landing","search","whereToReno","selectReno","selectQuality","results"],
    currentPage: 'landing',
    address: {},
    zillowData: {},
  };

  // processAddress() {
    // make request to zillow
      // .THEN
        // put the data from zillow into state (this.setState({ zillowData: {...} }))
      // .THEN
        // progress to next step
  //}

  render() {

    const findCurrentIndex = () => {
      return this.state.pageList.findIndex((element) => {
        return element === this.state.currentPage;
      }) 
    }

    const goToNextCard = () => {
      let currentIndex = findCurrentIndex();
      this.setState({
        currentPage: this.state.pageList[currentIndex + 1]
      })
    };

    const goToPreviousCard = () => {
      let currentIndex = findCurrentIndex();
      this.setState({
        currentPage: this.state.pageList[currentIndex - 1]
      })
    }



    return (
    <div className="Home">
      {this.state.currentPage === "landing" && <Landing goToNextCard={goToNextCard}/>}
      {this.state.currentPage === "search" && <SearchForm processAddress={this.processAddress} goToPreviousCard={goToPreviousCard}/>}
      
    </div>
    );
  }
}
export default Home;
