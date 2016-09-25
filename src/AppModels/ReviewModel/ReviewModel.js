import { PropTypes } from 'react';
import { Model } from '../Model';
import { makeCommentable } from '../Commentable';
import CONFIG from '../../../config';

export class ReviewModel extends Model {

  static baseUrl = `${CONFIG.BOUTIQ_API}/posts`;
  static schema = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    name_address: PropTypes.string,
    street_number: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
    locality: PropTypes.string,
    administrative_area_level_1: PropTypes.string,
    country: PropTypes.string,
    postal_code: PropTypes.string,
    tag: PropTypes.array,
    photo: PropTypes.string,
    google_place_id: PropTypes.string,
    route: PropTypes.string,
    neighborhood: PropTypes.string,
    reviews_attributes: PropTypes.object,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  };
  static modelName = 'place';

  constructor(props) {
    super(props);
    makeCommentable(this);
  }
}
