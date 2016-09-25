import { PropTypes } from 'react';
import { Model } from '../Model';
import { makeCommentable } from '../Commentable';
import CONFIG from '../../../config';

export class PostModel extends Model {

  static baseUrl = `${CONFIG.BOUTIQ_API}/posts`;
  static schema = {
    id: PropTypes.string,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    comments: PropTypes.array,
  };
  static modelName = 'post';

  constructor(props) {
    super(props);
    makeCommentable(this);
  }
}
