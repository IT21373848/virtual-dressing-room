import sound from "../../../public/aud/a1.mp3"
const Sounds=() => {

    function play(){
        new Audio(sound).play();
    }

    return(
        <div className="soundBT">
            <button
                onClick={play}
                className="soundBT_BT"
            >
                Play Sound
            </button>
        </div>
    );
};
export default Sounds;