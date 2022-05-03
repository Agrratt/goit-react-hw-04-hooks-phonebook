import PropTypes from 'prop-types';
import { InputFilter} from 'components/Filter/Filter.styled';

export const Filter = ({value, onChange}) => (
    <label>
            Find contacts by name <br />
        <InputFilter
            type="text"
            value={value}
            onChange={onChange} />
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};