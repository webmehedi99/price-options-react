import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div className='hover:bg-gray-400 mr-10 px-5'>
            <li className="mr-10" >
                <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route :PropTypes.object
}



export default Link;