import "./Fool.css"
const Fool = () => {
    const rick="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFnMml3Z2N5ZmZjdXNtcWRqZGRmcmpmNmhxY3UwOHJ6aDd2NGxqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif";
    return(
        <>
            <img src={rick} alt="You've been rick rolled" className="fool"/>
        </>
            )
}
export default Fool;