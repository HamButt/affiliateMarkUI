import React , {useEffect, useState} from 'react'
import axios from 'axios'

function Dashboard() {
const [date, setDate] = useState(null)
const [totalCLicks, setSetTotalCLicks] = useState(null)

    useEffect(()=>{
        getUser()
      }, [])
    
    
      const getUser = async () => {
        try {
          
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
          const date = new Date(res?.data?.user[0]?.lastClickedAt);
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const userRachedDate = date.toLocaleTimeString('en-US', options);
            setDate(userRachedDate)
            setSetTotalCLicks(res?.data?.user[0]?.totalClicks)
        } catch (error) {
          console.log(error);
          
        }
          
      }
  return (
    <div className='font-semibold text-2xl text-center mt-7' >
      <p>Last clicked at: {date}</p>
      <p>Total clicks: {totalCLicks}</p>
    </div>
  )
}

export default Dashboard