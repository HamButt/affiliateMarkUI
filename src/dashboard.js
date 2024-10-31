import React , {useEffect, useState} from 'react'
import axios from 'axios'

function Dashboard() {
const [date, setDate] = useState(null)
const [count, setCount] = useState(null)

    useEffect(()=>{
        getUser()
      }, [])
    
    
      const getUser = async () => {
        try {
          
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
        //   console.log(res?.data?.user[0]?.recentUserReachedAt, res?.data?.user[0]?.totalUsers);
          
            const date = new Date(res?.data?.user[0]?.recentUserReachedAt);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const userRachedDate = date.toLocaleTimeString('en-US', options);
            setDate(userRachedDate)
            setCount(res?.data?.user[0]?.totalUsers)
        } catch (error) {
          console.log(error);
          
        }
          
      }
  return (
    <div>total Users {count} | Reacent user {date} </div>
  )
}

export default Dashboard