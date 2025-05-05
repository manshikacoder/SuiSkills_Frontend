import React, { useSyncExternalStore } from 'react'
// import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios';

const Home = () => {
 

  const users = [
  {
    "name": "Manisha Kumari",
    "profession": "Web Developer",
    "age": 25,
    "city": "Patna"
  },
  {
    "name": "Rahul Verma",
    "profession": "Data Analyst",
    "age": 28,
    "city": "Delhi"
  },
  {
    "name": "Sneha Sharma",
    "profession": "UI/UX Designer",
    "age": 24,
    "city": "Bangalore"
  },
  {
    "name": "Amit Singh",
    "profession": "Software Engineer",
    "age": 30,
    "city": "Hyderabad"
  },
  {
    "name": "Priya Mehta",
    "profession": "Digital Marketer",
    "age": 27,
    "city": "Mumbai"
  }
  ];


  // api code

  // const getData = async() => {
  //   const response = await axios.get("https://picsum.photos/v2/list")
  //   console.log(response)
  // }

  // const [data,setData] = useState([])

  const getData = async() => {
    const response = await axios.get("https://picsum.photos/v2/list")
    // setData(response.data)
    console.log(response)
  }
 
  return (
      <>
      <Button>Click Me</Button>
        <div className="flex justify-between items-center">
           {users.map(function (elem,id) {
          return <Card key={id} name={elem.name} age={elem.age} city={elem.city} prof={elem.profession}  />
         })}
        </div>
        <div className="sec-2 p-10">
          <button onClick={getData} className='px-3 py-2 bg-green-950 text-white font-2xl rounded active:scale-90'>Get Data</button>
          <div className="p-5 mt-5 bg-gray-900 text-white">
           
          </div>
        </div>
         
      </>
  )
}

export default Home
