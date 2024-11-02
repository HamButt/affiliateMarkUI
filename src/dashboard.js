import React , {useEffect, useState} from 'react'
import axios from 'axios'

function Dashboard() {
const [data, setData] = useState([])

    useEffect(()=>{
        getUser()
      }, [])
    
    
      const getUser = async () => {
        try {
          
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
            setData(res.data.user)
        } catch (error) {
          console.log(error);
          
        }
          
      }
  return (
    <div>{
      data.map((user, index) => {
            const date = new Date(user.recentUserReachedAt);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const userRachedDate = date.toLocaleTimeString('en-US', options);
        return (
          <div key={user._id} className='flex items-center justify-center text-start mt-6 flex-col' >
            <p className='text-2xl font-semibold' >Last user : {userRachedDate}</p>
            <p className='text-2xl font-semibold' > Page: {user.page ? user.page : "Not yet" }</p>
            <p className='text-2xl font-semibold' >total users: {user.totalUsers}</p>
          </div>
        )
      })
    } </div>
  )
}

export default Dashboard