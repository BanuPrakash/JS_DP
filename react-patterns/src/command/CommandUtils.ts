import type { CSSProperties, Dispatch } from "react";

export interface CommandUtils {
    styles: CSSProperties;
    setStyles:Dispatch<React.SetStateAction<CSSProperties>>;
}