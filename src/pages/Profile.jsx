import { useLocation, useNavigate } from 'react-router-dom'

function Profile() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state?.user

  if (!user) {
    navigate('/', { replace: true })
    return null
  }
  return(
    <div className='min-h-screen bg-gray-300 flex justify-center items-center p-8'>
      {/* Main Container */}
      <div className='flex bg-gray-50 rounded-2xl shadow-lg overflow-hidden'>
        {/* Image Section */}
        <div className='w-400px h-500px bg-gray-200 flex items-center justify-center p-6'>
          <img
            src={user.image}
            alt={user.name}
            className='w-full h-full object-cover rounded-xl'
          />
        </div>

        {/* Details Section */}
        <div className='w-400px h-500px bg-gray-50 p-8  '>

          {/* Top Content */}
          <div>

            {/* Name & Designation */}
            <div className='mb-10'>
              <h1 className='text-3xl font-bold'>
                {user.name}
              </h1>

              <p className='text-gray-600 text-lg mt-2'>
                {user.designation}
              </p>
            </div>

            {/* User Details */}
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <span className='font-semibold w-24'>Email</span>
                <span >{user.email}</span>
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold w-24'>Company</span>
                <span >{user.company}</span>
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold w-24'>Country</span>
                <span >{user.country}</span>
              </div>
            </div>

          </div>

          {/* Bottom Button */}
          <div className='flex justify-center'>
            <button
              onClick={() => navigate('/edit', { state: { user } })}
              className='px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-3'>
              Edit Profile
            </button>
          </div>

        </div>

      </div>

    </div>
)
}

export default Profile
