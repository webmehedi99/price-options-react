import PropTypes from "prop-types";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const Feature = ({ feature }) => {
    return (
        <div className="flex ">
            <h4 className="text-black flex gap-2 flex-grow text-center items-center ">
                <IoIosCheckmarkCircleOutline className="  bg-green-500 rounded-full" />
                {feature}
            </h4>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}


export default Feature;