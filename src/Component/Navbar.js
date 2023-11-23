import React from 'react'
import { Link } from 'react-router-dom'
import Latest_Bikes from './Latest_Bikes'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" >Festival</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"Latest Car"}>Latest Car</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"Latest Bikes"}>Latest Bikes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"L Krishna"}>Lord Krishna</Link> 
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"Tempalet"}>Tempalet</Link>
        </li>
        <li1>
          <Link class="nav-link" to={"Upcoming Fes"}>Upcoming Festival</Link>
        </li1>
      </ul>
    </div>
  </div>
</nav>
  )
}
