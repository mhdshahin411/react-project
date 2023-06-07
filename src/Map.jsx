
import React from 'react'
import Mapprops from './Mapprops';

function Map() {
    const arr = [
        {
          name: "shahin",
          age: 20,
          qualification: "B-tech",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.1mm98_jWQi-d936FSQY3iQHaEK&pid=Api&P=0",
        },
        {
          name: "safa",
          age: 20,
          qualification: "B-tech",
          image:
            "https://tse1.mm.bing.net/th?id=OIP._B2QyjYxS3qGq7UEhE2_rAHaEo&pid=Api&P=0",
        },
        {
          name: "jusair",
          age: 20,
          qualification: "B-tech",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.-8AXWkhFKGJoiC-nz_MScAHaGD&pid=Api&P=0",
        },
        {
          name: "waseem",
          age: 20,
          qualification: "B-tech",
          image:
            "https://tse2.mm.bing.net/th?id=OIP.aT1o4K07ELjvo9hMQkgQAgHaMR&pid=Api&P=0",
        },
        {
          name: "shuhaib",
          age: 20,
          qualification: "B-tech",
          image:
            "https://tse1.mm.bing.net/th?id=OIP.n9c2HoKeIFXa8XGPUODkqwHaEK&pid=Api&P=0",
        },
      ];
  return (
    <div className='d-flex'>
        {arr.map((item)=>{
            return(
                <Mapprops name={item.name} age={item.age} quali={item.qualification} image={item.image} />
            )
        })}
    </div>
  )
}

export default Map
