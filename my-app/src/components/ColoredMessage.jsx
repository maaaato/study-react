export const ColoredMessage = (props) => {
    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    };

    return <p style={contentStyle}>{props.children}</p>;
};