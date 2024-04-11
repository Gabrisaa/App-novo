import { Dispatch, SetStateAction, useState } from "react"
import { Slide1 } from './src/screens/Slide1';
import {Slide2} from './src/screens/Slide2'
import { Text } from "react-native";
export interface IPage{
  Ipage: number,
  IsetPage: Dispatch<SetStateAction<number>>
}

export default function App() {
  
  const [page, setPage] = useState(1)
if (page == 1) {
  return <Slide1 Ipage={page} IsetPage={setPage} />
}else {
  return <Slide2 Ipage={page} IsetPage={setPage} />
}

}