import PropTypes from "prop-types";
import Feature from "../Features/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-yellow-300  rounded-md p-10 mt-10 flex flex-col ">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl"> /mon</span>
            </h2>
            <h4 className="text-5xl my-6 flex-grow text-center ">{name}</h4>
            <div className="flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className=" w-full py-3 text-2xl  text-white font-bold bg-green-400 mt-8 rounded-lg">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
    Feature: PropTypes.string
}

export default PriceOption;