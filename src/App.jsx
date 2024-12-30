import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './assets/data'
import './App.css'

export default function App() {
  // console.log("country data:", data)

  const countryData = data.map((entry) =>{
    return (
      <Entry
      key={entry.id}
      entry ={entry}
    />
    )
  })

  return (
    <>
      <Header/>
      <main className="container">
        {countryData}
      </main>    
    </>

  )
}