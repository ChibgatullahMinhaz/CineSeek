import React from 'react'
import { ShowPopuler } from "./ShowPopuler";
import { Upcomming } from "./Upcomming";
import { TopRated } from "./TopRated";
export const MainContent = ({featuredpromise,searchPromise,upcommingmovies,populermoviepromies, topratedmoviespromise}) => {
  return (
    <div className="p-4 py-6 mt-10">
          <Upcomming upcommingmovies={searchPromise}></Upcomming>
          <h1 className="text-3xl text-red-400 font-bold"> Latest Movies </h1>
          <Upcomming upcommingmovies={featuredpromise}></Upcomming>
          <h1 className="text-3xl text-red-400 font-bold"> Upcoming Movies </h1>
          <Upcomming upcommingmovies={upcommingmovies}></Upcomming>
          <TopRated topratedmoviespromise={topratedmoviespromise}></TopRated>
          <ShowPopuler populermoviepromies={populermoviepromies}></ShowPopuler>
    </div>
  )
}
