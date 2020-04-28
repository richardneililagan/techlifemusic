import React from 'react'

// :: ---

const translateYoutubeUrl = url => {
  return url.replace(
    /^http(s?):\/\/youtu\.be\//gi,
    'https://youtube.com/embed/'
  )
}

// :: ---

/**
 *  Translates a given URL to a proper embed URL specific to the provider,
 *  if necessary.
 */
const translateUrl = url => {
  // :: TODO other embed formats
  const __url = translateYoutubeUrl(url)

  return __url
}

function VideoPlayer({ src, w = 560, h = 315 }) {
  const aspect = h / w

  return (
    <div>
      <div
        className='video-player'
        style={{
          position: 'relative',
          height: 0,
          paddingBottom: `${aspect * 100}%`,
          paddingTop: 0
        }}
      >
        <iframe
          src={translateUrl(src)}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </div>
    </div>
  )
}

export default VideoPlayer
