import type { ButtonComponent, CardComponent } from "./interfaces";

export const LightButton: ButtonComponent = ({children, onClick}) => (
    <button style={{background:'white', color: 'black', border: '1px solid black'}} onClick={onClick}>
        {children}
    </button>
)


export const LightCard: CardComponent = ({children}) => (
    <div style={{background:'white', color: 'black', border: '1px solid black'}}>
        {children}
    </div>
)