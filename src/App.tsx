import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

export default function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true)

  const projects = [
    { id:"1", name:"Site E-commerce", color:"#e74c3c"},
    { id:"2", name:"App Mobile", color:"#3498db"},
    { id:"3", name:"API Backend", color:"#2ecc71"}
  ]

  const columns = [
    { id:"todo", title:"À Faire", tasks:["Maquettes UI","Specs techniques"] },
    { id:"progress", title:"En cours", tasks:["API Auth","Page Login"] },
    { id:"done", title:"Terminé", tasks:["Setup projet","Config ESLint"] }
  ]

  return (

    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>

      <Header title="TaskFlow" onMenuClick={()=>setSidebarOpen(!sidebarOpen)} />

      <div style={{display:"flex", flex:1}}>

        <Sidebar projects={projects} isOpen={sidebarOpen} />

        <MainContent columns={columns} />

      </div>

    </div>

  )
}