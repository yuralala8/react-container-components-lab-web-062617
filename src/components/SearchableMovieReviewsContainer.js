import React, {Component} from 'react';
import MovieReviews from './MovieReviews'



class SearchableMovieReviewsContainer extends Component {

	constructor() {
		super();

		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}


	render(){
		return (
			<div className="searchable-movie-reviews">
			<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}


}


export default SearchableMovieReviewsContainer;