const Button1 = (props) => {
    const { text = "Submit" } =props; 
    return <button
    style={{
        color:"white",
        backgroundColor:"blue",
        cursor:"pointer",
    }}
    >
        {text}
        </button>
}

export default Button1;