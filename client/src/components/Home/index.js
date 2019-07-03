import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../config/reactKeys'
import convert from 'xml-js';

//Components
import SearchForm from '../SearchForm/SearchForm';
import Landing from '../Landing/index';
import SearchResults from '../SearchResults/index';

class Home extends Component {
  state = {
    // pageList: ["landing","search","searchResults","whereToReno","selectReno","selectQuality","renoResults"],
    // currentPage: 'landing',
    
  };

  // processAddress() {
    // make request to zillow
      // .THEN
        // put the data from zillow into state (this.setState({ zillowData: {...} }))
      // .THEN
        // progress to next step
  //}
  zillowRequest = (e) => {
    e.preventDefault();
    const proxyURL = 'https://peaceful-island-88132.herokuapp.com/'
    return axios({
      method: 'post',
      url: proxyURL + 'http://www.zillow.com/webservice/GetSearchResults.htm',
      params: {
        'zws-id': keys.ZillowAPIKey,
        'citystatezip': this.state.formInput.formZip,
        'address': this.state.formInput.formAddress
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then((response) => {
      const resJSON = convert.xml2js(response.data, {compact: false, spaces: 4});
      this.setState({
        zillowData: {
          zEstimate: resJSON.elements[0].elements[2].elements[0].elements[0].elements[3].elements[0].elements[0].text,
          asOf: resJSON.elements[0].elements[2].elements[0].elements[0].elements[3].elements[1].elements[0].text
        }
      })
    })
  }

  handleChange = (event, name) => {
    this.setState({
      formInput:{
        ...this.state.formInput,
        [name]: event.target.value
      }
    })
  }

  render() {

    // const findCurrentIndex = () => {
    //   return this.state.pageList.findIndex((element) => {
    //     return element === this.state.currentPage;
    //   }) 
    // }

    // const goToNextCard = () => {
    //   let currentIndex = findCurrentIndex();
    //   this.setState({
    //     currentPage: this.state.pageList[currentIndex + 1]
    //   })
    // };

    // const goToPreviousCard = () => {
    //   let currentIndex = findCurrentIndex();
    //   this.setState({
    //     currentPage: this.state.pageList[currentIndex - 1]
    //   })
    // }



    return (
    <div className="Home">
      {/* {this.state.currentPage === "landing" && 
        <Landing/>
      }
      {this.state.currentPage === "search" && 
        <SearchForm 
          handleChange={this.handleChange}
          formInput={this.state.formInput}
          zillowRequest={this.zillowRequest}
        />
       
      }
      {this.state.currentPage === "searchResults" &&
        <SearchResults 
          zEstimate={this.state.zillowData.zEstimate}
          asOf={this.state.zillowData.asOf}
        />
      } */}
    </div>
    );
  }
}
export default Home;
