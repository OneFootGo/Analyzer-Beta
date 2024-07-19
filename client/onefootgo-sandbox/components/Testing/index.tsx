'use client'

import React, {useEffect, useState} from 'react'

function Testing() {

  const [message, setMessage] = useState('Loading')
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then((data) => {
      setMessage(data.message)
      setPeople(data.people)
    })
  }, [])

  return(
    <div>
      <div>{message}</div>
    </div>
  )

}

export default Testing