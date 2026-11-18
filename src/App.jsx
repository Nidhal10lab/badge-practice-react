// import {useState} from 'react'
// function App(){
//   const[count,setCount]=useState(0)
// return (
//   <>
//   <h1>Counter App</h1>
//   <h2>{count}</h2>
//   <button onClick={()=>setCount(count+1)}>Increment</button>
//   <button onClick={()=>setCount(count-1)}>decrement</button>
//   <button onClick={()=>setCount(0)}>reset</button>
//   </>
// )
// }
// export default App

// import { useState } from "react"

// import {useState} from 'react'
// function App(){
//   const[show,setShow]=useState(true)
//   return (
//     <>
//     <h1>Hide or show text</h1>
//     <h3>{show?"":"hi my name is nidhal pk"}</h3>
//     <button onClick={()=>setShow(!show)}>{show?"show":"Hide"}</button>
//     </>
//   )

// }
// export default App


// import {useState} from 'react'
// function App(){
//   const[text,setText]=useState(true)
//   return (
//     <>
//     <h1>{text?"Welcome to React":"Happy Learning"}</h1>
//     <button onClick={()=>setText(!text)}>change</button>
//     </>
//   )
// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[bg,setBg]=useState("black")
//   return (
//     <div style={{background:bg,height:400}}>
//     <button onClick={()=>setBg("red")}>red</button>
//     <button onClick={()=>setBg("blue")}>blue</button>
//     <button onClick={()=>setBg("green")}>green</button>
//     </div>
//   )
// }
// export default App
// import {useState} from 'react'
// function App(){
//   const[heart,setHeart]=useState(true)
// return (
//   <>
//   <button onClick={()=>setHeart(!heart)} style={{border:"none",background:"none",fontSize:"30px"}}>{heart?"🤍":"❤️"}</button>
//   </>
// )

// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[text,setText]=useState("")
//   return (
//     <>
//     <h1>text</h1>
//     <label htmlFor='area'>{text.length}/100</label><br/>
//     <textarea id="area" onChange={(e)=>setText(e.target.value)} value={text} maxLength={100}></textarea>
//     </>
//   )
// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[email,setEmail]=useState("")
//   const[pass,setPass]=useState("")
//   const[showEmail,setShowEmail]=useState("")
//   const[showPass,setShowPass]=useState("")


//   function handleLogin(){
//     setShowEmail(email)
//     setShowPass(pass)
//   }
// return (
//   <>
//   <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//   <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}></input>
//   <button onClick={handleLogin}>Login</button>
//   <h1>{showEmail}</h1>
//   <h1>{showPass}</h1>

//   </>
// )
// }
// export default App
// import {useState} from 'react'
// function App(){
//   const[pass,showPass]=useState("")
//   const[showpass,setShowPass]=useState(true)
//   return (
//     <>
//     <input type='password' value={pass} onChange={(e)=>showPass(e.target.value)}></input>
//     <input type='text' value={pass} onChange={(e)=>showPass(e.target.value)}></input>

//     <button>hide/show</button>
    

//     </>
//   )
// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[quantity,setQuantity]=useState(1)
//   const[price,setPrice]=useState(20000)
//   function handleadd(){
//     setQuantity(quantity+1)
//     setPrice(price+20000)
//   }
//   function handleremove(){
//     if(quantity>0){
//     setQuantity(quantity-1)
//     setPrice(price-20000)
//     }
//     else{
//       setQuantity(0)
//       setPrice(0)
//     }
//   }
//   return (
//     <>
//     <div style={{border:"2px"}}>
//       <h4>Product</h4><br/>
//       <p>name:Iphone 14</p><br/>
//       <p>price:20000</p><br/>
//       <p>quantity:{quantity}</p><br/>
//       <p>total price:{price}</p><br/>
//       <button onClick={handleadd}>+</button>
//       <button onClick={handleremove}>-</button>
//     </div>
//     </>
//   )

// }
// export default App

// import { useState } from "react"
// function App(){
//   const[home,setHome]=useState("")
//   const[about,setAbout]=useState("")
//   const[contact,setContact]=useState("")
//   function Home(){
//     setHome("Home Page aan mone")
//     setAbout("")
//     setContact("")
//   }

//   function Contact(){
//     setHome("")
//     setAbout("")
//     setContact("Contact Page aan mone")
//   }
  
//   function About(){
//     setHome("")
//     setAbout("About Page aan mone")
//     setContact("")
//   }
//   return (
//     <>
//     <h1>Buttons</h1>
//     <button onClick={Home}>Home</button><br/>
//     {home}
//     <button onClick={About}>About</button><br/>
//     {about}
//     <button onClick={Contact}>Contact</button><br/>
//     {contact}
//     </>
//   )
// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[todo,setTodo]=useState("")
//   const[todos,setTodos]=useState([])
//   function Add(){
//    if(todo.trim()==="")return
//     setTodos([...todos,todo])
//     setTodo("")
//   }

//   function deletetodo(index){
//     const removeitem=todos.filter((item,i)=>{
//       return i !==index
//     })
//     setTodos(removeitem)
//   }
//   return (
//     <>
//     <h1>Note App</h1>
//     <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
//     <button onClick={Add}>Add</button>
//     <ul>
//       {todos.map((item,index)=>(
//         <div key={index}>
//           {item}
//           <button onClick={()=>deletetodo(index)}>delete</button>
//         </div>
//       ))}
//       </ul>
//     </>
//   )
// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[todo,settodo]=useState("")
//   const[todos,settodos]=useState([])
//   function Add(){
//     if(todo.trim()==="")return 
//     settodos([...settodos,todo])
//     settodo("")
//   }
//   return (
//     <>
//     <h1>Todo App</h1>
//     <input type='text' value={todo} onChange={(e)=>settodo(e.target.value)}></input>
//     <button onClick={Add}>Add</button>
//     <ul>
//       {todos.map((index,item)=>(
//         <li key={index}>
//           {item}
//         </li>
//       ))}
//     </ul>
//     </>
//   )

// }
// export default App

// import {useState} from 'react'
// function App(){
//   const[todo,setTodo]=useState("")
//   const[todos,setTodos]=useState([])
//   function Add(){
//      setTodos([...todos,todo])
//      setTodo("")
//   }
//   function deletetodo(index){
//     const updated=todos.filter((item,i)=>{
//       return i !==index
//     })
//     setTodos(updated)
//   }
// return (
//   <>
//   <h1>TO-DO App</h1>
//   <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
//   <button onClick={Add}>Add</button>
//   {todos.map((item,index)=>(
//     <div key={index}>
//       <li>
//         {item}
//         <button onClick={()=>deletetodo(index)}>delete</button>
//       </li>

//     </div>
//   ))}
//   </>
// )
// }
// export default App