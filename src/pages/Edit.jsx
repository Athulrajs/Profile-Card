import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Edit() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state?.user

  const [form, setForm] = useState(
    user || {
      name: '',
      designation: '',
      email: '',
      company: '',
      country: '',
      image: '',
    }
  )
  const [preview, setPreview] = useState(user?.image || '')
  const [fileName, setFileName] = useState('')

  if (!user) {
    navigate('/', { replace: true })
    return null
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()

    reader.onload = () => {
      const imageUrl = reader.result
      setPreview(imageUrl)
      setForm((prevForm) => ({ ...prevForm, image: imageUrl }))
    }

    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/profile', { state: { user: form } })
  }

  return (
    <div className='w-screen h-screen bg-gray-300 '>
      <div className='flex flex-col items-center'>
        <div className='h-screen bg-gray-200 shadow-gray-100'>
          <h1 className='text-xl font-semibold mt-6 mb-3 text-center'>
            <button className='border p-0.5 rounded block ml-1' onClick={()=>navigate(-1)}>Back</button>Edit Profile</h1>
          <div className='flex flex-col justify-center items-center '>
            {preview ? (
              <img className='rounded-full w-46 h-46 mb-7'
              src={preview} 
              alt="Profile preview" />
            ) : (
              <div>No Image</div>
            )}
            <label className='bg-blue-400 border rounded p-1 text-white hover:bg-blue-600'>
              Change Image
              <input
                className='hidden'
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            {fileName && <p>{fileName}</p>}
          </div>

          <form className='w-96 space-y-4 ml-4 ' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className='text-lg font-semibold' htmlFor="name">Name</label>
              <input
                className='border-b outline-none'
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold' htmlFor="designation">Designation</label>
              <input
                className='border-b outline-none'
                id="designation"
                name="designation"
                type="text"
                value={form.designation}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold' htmlFor="email">Email</label>
              <input
                className='border-b outline-none'
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold' htmlFor="company">Company</label>
              <input
                className='border-b outline-none'
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold' htmlFor="country">Country</label>
              <input
                className='border-b outline-none'
                id="country"
                name="country"
                type="text"
                value={form.country}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-20 justify-center items-center mt-5'>
            <button 
             className='p-1 hover:bg-blue-500 rounded  hover:text-white'
             type="button" 
             onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button 
            className='p-1 hover:bg-blue-500 rounded  hover:text-white'
            type="submit">
              Save
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit
