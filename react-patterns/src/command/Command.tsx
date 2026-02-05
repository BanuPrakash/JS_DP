import { useRef, useState, type CSSProperties } from "react";
import type { CommandUtils } from "./CommandUtils";

export abstract class Command<T> {
    utils:T;
    constructor(utils: T) {
        this.utils = utils;
    }

    abstract execute(): void;
    abstract undo(): void;
}

export class ItalicCommand<T extends CommandUtils> extends Command<T> {
    prevFontStyle?: CSSProperties["fontStyle"];
    constructor(utils:T) {
        super(utils);
        this.prevFontStyle = utils.styles.fontStyle
    }

    getNextStyle() {
        if(this.prevFontStyle === "italic" ) {
            return "normal";
        }
        return "italic"
    }
    execute(): void {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontStyle: nextFontStyle
        }));
    }
    undo(): void {
         this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontStyle: this.prevFontStyle
        }));
    }
}



export class BoldCommand<T extends CommandUtils> extends Command<T> {
    prevFontWeight?: CSSProperties["fontWeight"];
    constructor(utils:T) {
        super(utils);
        this.prevFontWeight = utils.styles.fontWeight
    }

    getNextStyle() {
        if(this.prevFontWeight === "bold" ) {
            return "normal";
        }
        return "bold"
    }
    execute(): void {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontWeight: nextFontStyle
        }));
    }
    undo(): void {
         this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontWeight: this.prevFontWeight
        }));
    }
}

function useHistoryManager<T>() {
    const [backHistory, setBackHistory] = useState<Command<T>[]>([]);
    const topRef = useRef(-1);

    const executeCommand = async (command:Command<T>) => {
        await command.execute();
        setBackHistory((prev) => [...prev, command]);
        topRef.current++;
    }

    const undo = async () => {
        const topUndo = backHistory[topRef.current];
        await topUndo.undo();
        setBackHistory((prev) => prev.slice(0, -1));
        topRef.current --;
    }

    return {
        executeCommand, undo
    }
}
export default function CommandComponent() {
  const [styles, setStyles] = useState<CSSProperties>({})
  const utils = {styles, setStyles};
  const {executeCommand, undo} = useHistoryManager<CommandUtils>();

  const toItalic = async () => {
    const italicCommand = new ItalicCommand(utils);
    await executeCommand(italicCommand);
  }

   const toBold = async () => {
    const boldCommand = new BoldCommand(utils);
    await executeCommand(boldCommand);
  }

  return (
    <div>
        <div>
            <p style={styles}>
                Hello from React!!!
            </p>
        </div>
        <button onClick={toItalic}>I</button> 
        <button onClick={toBold}>B</button>
        <button onClick={undo}>Undo</button> 
    </div>
  )
}
