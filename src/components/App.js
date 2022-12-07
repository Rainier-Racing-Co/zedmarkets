import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage.js';
import LiveMarkets from './LiveMarkets.js';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import HorseLookup from './HorseLookup.js';

const GRAPHQL_API = 'https://zed-ql.zed.run/graphql';
const GET_HORSE_DATA_QUERY = `
query($input: HorseInput) {
	horse(input: $input) {
		name
		nft_id
		img_url
		gen
		bloodline
		breed_type
		color
		inserted_at
		last_breeding_reset
		breeding_counter
		horse_type
		race_statistic {
			first_place_finishes
			second_place_finishes
			third_place_finishes
			number_of_races
			win_rate
		}
    offsprings {
			bloodline
			breed_type
			color
			gen
			horse_type
			nft_id
			race_statistic {
				first_place_finishes
				second_place_finishes
				third_place_finishes
				number_of_races
				win_rate
				positions_per_distance{
					distance
					positions{
						frequency
						position
					}
				}
			}
	  }
  }
}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horses: [],
      queriedHorse: null
    };
  }
  
  handleHorseQueryInput = async (e) => {
    await this.setState({
      queriedHorse: parseInt(e.target.value)
    });
    console.log(this.state.queriedHorse);
  };

  handleHorseQuerySubmit = (e) => {
    e.preventDefault();
    this.getHorse(this.state.queriedHorse);
  };

  getHorse = async (horseId) => {
    try{
      const queryResult = await axios.post(
        GRAPHQL_API, {
          query: GET_HORSE_DATA_QUERY,
          headers: {"Content-Type":"application/json"},
          variables: {
            "input": {
              "horse_id": horseId
            }
          }
        });
      const horseResult = queryResult.data.data.horse;
      console.log('horseResult', horseResult);
      this.setState({horses: horseResult});
      console.log('state: ', this.state.horses);
    } catch(err) {
      console.log('Error: ', err.message);
    }
  };

  render () {
    return (
      <>
        <Header/>
        <div className='all-content-container'>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/markets" element={<LiveMarkets/>}/>
            <Route exact path="/horse" element={<HorseLookup handleHorseQuerySubmit={this.handleHorseQuerySubmit} horses={this.state.horses} queriedHorse={this.state.queriedHorse} handleHorseQueryInput={this.handleHorseQueryInput}/>}/>
            <Route exact path="*" />
          </Routes>
          {/* {this.props.auth0.isAuthenticated ? <h1>Welcome Back!</h1> : <LandingPage/> } */}
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
