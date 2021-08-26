import React from 'react'
import { useState } from 'react'

function UploadGifs() {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
  
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'samantha')
      setLoading(true)
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dqapspd5t/image/upload/?api_key793118652795214',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
  
      setGif(file.secure_url)
      setLoading(false)
    }
  
    return (
      <div className="upload-gif">
        <h1>Upload Gif</h1>
        
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={gif}  alt = 'gif' style={{ width: '300px' }} />
        )}
      </div>
    )
  }

export default UploadGifs
