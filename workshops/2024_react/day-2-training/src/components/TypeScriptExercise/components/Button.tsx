
type Colors = "gray" | "lightgray" | "black" | "white"

type ButtonType = {
    style: {
        backgroundColor: Colors,
        color: Colors,
        fontSize: number,
        padding: [number, number?, number?, number?]
    },
    text?: string,
    action: () => void
}

// alternative
interface Button {
    // ... s.o.
}

export type ButtonTypeAlt = {
    style: React.CSSProperties,
    text: string
}

const Button = ({ style, text = "Default", action}: ButtonType) => {

    const effectivePadding = style.padding.map(s => `${s}px`).join(" ")

    const effectiveStyle = { ...style, fontSize: `${style.fontSize}em`, padding: effectivePadding }
    return (
        <button onClick={action} style={effectiveStyle}>{text}</button>
    )
}

export default Button