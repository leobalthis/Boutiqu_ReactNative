import { PropTypes } from 'react';
import CONFIG from '../../../config';
import { Model } from '../Model';

export class PostModel extends Model {
  static baseUrl = `${CONFIG.BOUTIQ_API}/posts`;
  static schema = {
    id: PropTypes.string,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  };
  static modelName = 'post';
}
