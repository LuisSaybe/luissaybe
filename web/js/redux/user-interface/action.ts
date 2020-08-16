import { UserInterface } from "../../definition/user-interface";
export enum Type {
    set = 'user-interface/set',
}

export function set(data: UserInterface) {
    return {
        type: Type.set,
        data
    }
}