// import {useState,useEffect} from 'react'
// function App(){
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     document.title=`count:${count}`
//     console.log("count updated")
//   },[count])
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

// import {useState,useEffect} from 'react'
// function App(){
//   const[bg,setBg]=useState("black")
//   useEffect(()=>{
//     console.log(`background color is:${bg}`)
//   },[bg])
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

// import {useState,useEffect} from 'react'
// function App(){
//   const[text,setText]=useState("")
//   useEffect(()=>{
//     console.log(text)
//   },[text])
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

// import {useEffect} from 'react'

// function App(){
//   useEffect(()=>{
//     console.log("Component mounted")
//   },[])
// }
// export default App

// import {useEffect,useState} from 'react'

// function App(){
//   const[count,setCount]=useState(0)
//   const[isRun,setIsRun]=useState(false)
//   useEffect(()=>{
//     if(isRun===true){
//     const timer=setInterval(()=>{
//       setCount(prev=>prev+1)
//     },1000)
//     return()=>{
//       clearInterval(timer)
//     }
// }},[isRun])
//   return (
//     <>
//     <h1>timer/count</h1>
//     <h2>{count}</h2>
//     <button onClick={()=>setIsRun(true)}>start</button>
//     </>
//   )
// }
// export default App

// import {useState,useEffect} from 'react'
// import axios from 'axios'

// function App(){
//   const[user,setUsers]=useState([])
//   useEffect(()=>{
//    axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res=>{
//       setUsers(res.data)
//     })
//   },[])
  
// return (
//   <>
//   <h1>Fetching data from json server</h1>
//   {user.map((users)=>(
//     <h4 key={users.id}>{users.name}</h4>
//   ))}
//   </>
// )
// }
// export default App

// import {useRef} from'react'
// function App(){
//   const inputRef=useRef()
//   function focus(){
//     inputRef.current.focus()
//   }
//   function clear(){
//     inputRef.current.value=""
//     inputRef.current.focus()

//   }
//   return (
//     <>
//     <input ref={inputRef}></input>
//     <button onClick={clear}>clear</button>
//     </>
//   )
// }
// export default App
// https://jsonplaceholder.typicode.com/posts

// import {useState,useEffect} from 'react'
// import axios from 'axios'
// function App(){
//     const[users,setUsers]=useState([])

//     useEffect(()=>{
//         axios.post('https://jsonplaceholder.typicode.com/posts')
//         .then((res)=>{
//             setUsers(res.data)
//         })
//     },[])
    
//     return (
//         <>
//         {users.map((user)=>(
//             <div key={user.id}>
//                 <h5>{user.title}</h5>
//                 <p>{user.body}</p>
//             </div>
//         ))}
//         </>
//     )
// }
// export default App

// https://jsonplaceholder.typicode.com/users

// import {useState,useEffect} from 'react'
// import axios from 'axios'
// function App(){
//     const[users,setUsers]=useState([])
//     useEffect(()=>{
//         axios.get('https://github.com/Ovi/DummyJSON.git')
//         .then((res)=>{
//             setUsers(res.data)
//         })
//     },[])
//     return (
//         <>
//         <h1>users</h1>
//         {/* {users.map((user)=>(
//             <div key={user.id}>
//                 <p>{user.name}</p>
//                 <p>{user.email}</p>
//             </div>
//         ))} */}
//         <h3>name:{users.name}</h3>
//         <h3>name:{users.username}</h3>
//         </>
//     )
// }
// export default App

import {useState} from 'react'
function App(){
    const[search,setSearch]=useState("")

    const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 799,
    category: "Smartphones",
    brand: "Apple",
    stock: 25,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: 899,
    category: "Smartphones",
    brand: "Samsung",
    stock: 18,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400"
  },
  {
    id: 3,
    title: "MacBook Air M3",
    price: 1099,
    category: "Laptops",
    brand: "Apple",
    stock: 12,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
  },
  {
    id: 4,
    title: "Dell XPS 15",
    price: 1299,
    category: "Laptops",
    brand: "Dell",
    stock: 8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
  },
  {
    id: 5,
    title: "Sony WH-1000XM5",
    price: 349,
    category: "Headphones",
    brand: "Sony",
    stock: 30,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 6,
    title: "AirPods Pro 2",
    price: 249,
    category: "Earbuds",
    brand: "Apple",
    stock: 40,
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400"
  },
  {
    id: 7,
    title: "iPad Air",
    price: 599,
    category: "Tablets",
    brand: "Apple",
    stock: 15,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
  },
  {
    id: 8,
    title: "Apple Watch Series 9",
    price: 399,
    category: "Smartwatches",
    brand: "Apple",
    stock: 20,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400"
  },
  {
    id: 9,
    title: "Logitech MX Master 3S",
    price: 99,
    category: "Accessories",
    brand: "Logitech",
    stock: 50,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
  },
  {
    id: 10,
    title: "Canon EOS R50",
    price: 679,
    category: "Cameras",
    brand: "Canon",
    stock: 10,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
  }
]

 const filtered=products.filter((pro)=>
    pro.title.toLowerCase().includes(search.toLowerCase())
    )
return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'30px'}}>
    <h1 style={{}}>products</h1>
    <input type='text' placeholder='search products.....' style={{height:'30px' }} value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    </div>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', Gap:'20px' }}>
    {filtered.map((pro)=>(
        <div key={pro.id} style={{border:'5px solid black', width:'300px', textAlign:'center' , padding:''}}>
            <img src={pro.image} style={{width:'100px', height:'100px', border:'2px solid blue'}} />
            <h6>{pro.title}</h6>
            <h6>{pro.description}</h6>
            <h6>{pro.price}</h6>
        </div>
    ))}
    </div>
    </>
)
}
export default App