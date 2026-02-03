import type { ButtonComponent, CardComponent } from "./interfaces";

export const DarkButton: ButtonComponent = ({children, onClick}) => (
    <button style={{background:'black', color: 'white', border: '1px solid black'}} onClick={onClick}>
        {children}
    </button>
)


export const DarkCard: CardComponent = ({children}) => (
    <div style={{background:'black', color: 'white', border: '1px solid black'}}>
        {children}
    </div>
)