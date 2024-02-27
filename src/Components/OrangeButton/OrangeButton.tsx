import style from "./OrangeButton.module.css";
import PropTypes from "prop-types";
function OrangeButton({type, text}) {
    return (
        <>
            <button
                className={style.btn}
                type={type}>{text}</button>
        </>
    );
}
OrangeButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default OrangeButton;


