import style from "./OrangeButton.module.css";

function OrangeButton({type, text, onClick}) {
    return (
        <button
            className={style.btn}
            onClick={onClick}
            type={type}>
            {text}
        </button>);
}


export default OrangeButton;


