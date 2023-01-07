import React from 'react'
import YouTube from 'react-youtube'
import { useGlobalState } from '../context/movieContext'

const PlayerModal = ({ id }) => {
  const { setIsPlayerModalOpen } = useGlobalState()
  const opts = {
    width: '800',
    height: '550',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className='player-modal'>
      <span
        className='close-player'
        onClick={() => setIsPlayerModalOpen(false)}
      ></span>
      <YouTube className='player' opts={opts} videoId={id} />
    </div>
  )
}

export default PlayerModal
