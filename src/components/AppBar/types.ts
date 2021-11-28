import { Dispatch, SetStateAction } from "react";

export type AppBarProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}