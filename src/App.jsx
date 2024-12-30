import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import eiffel from './assets/eiffel.png'
import statue from './assets/statue.png'
import sagrada from './assets/sagrada.png'
import ben from './assets/ben.png'
import alban from './assets/alban.png'
import lincoln from './assets/lincoln.png'
import './App.css'

export default function App() {
  return (
    <>
      <Header/>
      <Entry
        img={{
          src: eiffel,
          alt: "Eiffel" 
        }}
        title="Eiffel Tower"
        country="France"
        googleMapsLink="https://www.google.com/maps/place/Eiffel+Tower+Tour/@48.8574446,2.2957701,16z/data=!3m1!4b1!4m6!3m5!1s0x47e66f998851939f:0x5da214ddc74f6006!8m2!3d48.8574446!4d2.2957701!16s%2Fg%2F11rn5rkwm5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="01 May, 2022 - 10 May, 2022"
        text="The Eiffel Tower, located in Paris, France, is one of the most iconic landmarks in the world. Standing at 330 meters tall, it attracts millions of visitors each year and offers breathtaking views of the city."
      />

      <Entry
        img={{
          src: statue,
          alt: "Statue of Liberty" 
        }}
        title="Statue of Liberty"
        country="United States"
        googleMapsLink="https://www.google.com/maps/place/Statue+of+Liberty/@40.6892494,-74.0445004,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004!16zL20vMDcycDg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="04 Jul, 2021 - 10 Jul, 2021"
        text="The Statue of Liberty, located on Liberty Island in New York City, is a symbol of freedom and democracy. It was gifted by France to the United States in 1886 and stands at 93 meters tall, including its pedestal."
      />

      <Entry
        img={{
          src: sagrada,
          alt: "Sagrada Familia" 
        }}
        title="Sagrada Familia"
        country="Spain"
        googleMapsLink="https://www.google.com/maps/place/Sagrada+Fam%C3%ADlia,+Eixample,+Barcelona,+Spain/@41.4060086,2.1771643,15z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2db868f209b:0xdd709ffba518881c!8m2!3d41.4043239!4d2.1746666!16s%2Fg%2F11dy697l3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="01 Sep, 2023 - 10 Sep, 2023"
        text="The Sagrada Familia, located in Barcelona, Spain, is an iconic basilica designed by architect Antoni Gaudí. Known for its intricate facades and towering spires, it is one of the most visited landmarks in the world."
      />

      <Entry
        img={{
          src: ben,
          alt: "Big Ben" 
        }}
        title="Big Ben"
        country="United Kingdom"
        googleMapsLink="https://www.google.com/maps/place/Big+Ben/@51.5007292,-0.1246254,16z/data=!3m2!4b1!5s0x47d8e55e300273ad:0x64ade3f4995c75cd!4m6!3m5!1s0x487604c38c8cd1d9:0xb78f2474b9a45aa9!8m2!3d51.5007292!4d-0.1246254!16zL20vMDI2eWRj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="15 Jun, 2022 - 25 Jun, 2022"
        text="Big Ben, located in London, United Kingdom, is one of the most recognizable clock towers in the world. Situated at the north end of the Palace of Westminster, it is a symbol of British culture and history."
      />

      <Entry
        img={{
          src: alban,
          alt: "Monte Albán" 
        }}
        title="Monte Albán"
        country="Mexico"
        googleMapsLink="https://www.google.com/maps/place/Monte+Alb%C3%A1n,+Oaxaca,+Mexico/@17.0438757,-96.7671651,16z/data=!3m1!4b1!4m6!3m5!1s0x85c7187d793ab219:0xbec62ae73fc32413!8m2!3d17.0438035!4d-96.7681104!16s%2Fg%2F1tgz0y0r?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="05 Mar, 2021 - 15 Mar, 2021"
        text="Monte Albán, located in Oaxaca, Mexico, is an ancient Zapotec archaeological site. It features pyramids, terraces, and ceremonial structures, offering a glimpse into the rich history of Mesoamerican civilizations."
      />

      <Entry
        img={{
          src: lincoln,
          alt: "Lincoln Memorial" 
        }}
        title="Lincoln Memorial"
        country="United States"
        googleMapsLink="https://www.google.com/maps/place/Lincoln+Memorial/@38.8892686,-77.050176,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b771e0906287:0x1049d1c9c95c2eb6!8m2!3d38.8892686!4d-77.050176!16zL20vMGRyenE?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        dates="20 Feb, 2024 - 28 Feb, 2024"
        text="The Lincoln Memorial, located in Washington, D.C., United States, honors Abraham Lincoln, the 16th President of the United States. It is an iconic symbol of American democracy and a popular tourist destination."
      />



    </>
  )
}