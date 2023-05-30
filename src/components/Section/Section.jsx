import { SecCont, SecTitle} from './Section.styled';
import PropTypes from 'prop-types';

const Section = ( {title, children} ) => {
    return (
        <SecCont>
            <SecTitle>{title}</SecTitle>{children}
        </SecCont>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default Section;