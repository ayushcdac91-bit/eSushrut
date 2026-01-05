const STATE = (import.meta.env.VITE_STATE || "HP").toUpperCase();

export const isMah = STATE === "MH";
export const isHP = STATE === "HP";

export default STATE;