import { Header } from "../assets/Header";
import { Panels } from "../assets/Panels";

export function Left(){
  return <div className="bg-gray-300 flex flex-col w-96 h-screen p-3 gap-8">
    <Header></Header>
    <Panels></Panels>
  </div>
}