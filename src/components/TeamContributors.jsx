import React from 'react'
import './teamContributor.scss'
import TeamMember from './TeamMember'
const TeamContributors = () => {
  return (
    <div id='team'>
      <div className="team-section">
        <h3>Meet Our team </h3>
        <div className="team">
            <TeamMember />
            <TeamMember />
        </div>
        <div className="team">
            <TeamMember />
            <TeamMember />
        </div>
      </div>
    </div>
  )
}

export default TeamContributors
