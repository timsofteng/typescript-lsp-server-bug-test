import { FC } from "react";
import BlaChild from "./BlaChild";

type BlaParentType = {};

const BlaParent: FC<BlaParentType> = () => <BlaChild></BlaChild>;

export default BlaParent;
