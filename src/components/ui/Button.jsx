export default function Button({ text, onClick, type = "button", className}) {
    return (
        <button onClick={onClick} type={type} className={className}>{text}</button>
    )
}