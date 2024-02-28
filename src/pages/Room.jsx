import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {

  const { chatid } = useParams();
const ourmeeting =(element)=>{
const appId=353126466
const serversecret='f5a7436238e798a0e265e1b0634199df'
const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serversecret,chatid, Date.now().toString(), ' enter username'  )

const zcloud = ZegoUIKitPrebuilt.create(kitToken);
zcloud.joinRoom({
  container:element,
  scenario:{
    mode:ZegoUIKitPrebuilt.VideoConference
  }
})
}

  return (
    <div className='flex flex-col sm:items-center sm:justify-center sm:h-screen sm:w-screen '>
      <div ref={ourmeeting} />
    </div>
  )
}

export default Room