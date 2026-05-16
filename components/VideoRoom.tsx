'use client'

import { useEffect } from 'react'
import DailyIframe from '@daily-co/daily-js'

export default function VideoRoom() {
  useEffect(() => {
    const callFrame = DailyIframe.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        width: '100%',
        height: '700px',
        borderRadius: '20px',
      },
    })

    callFrame.join({
      url: 'https://your-domain.daily.co/test-room',
    })

    return () => {
      callFrame.destroy()
    }
  }, [])

  return <div id="video-call"></div>
}