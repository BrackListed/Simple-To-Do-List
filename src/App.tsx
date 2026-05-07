export default function App(){
  return (
    <div>
      <Left></Left>
    </div>
  )
}


function Left(){
  return <div className="bg-gray-300 flex flex-col w-96 h-screen outline-amber-50">
    <div className= "outline-emerald-700">HEADER</div>
  </div>
}