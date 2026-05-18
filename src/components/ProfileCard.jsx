import { useState } from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'

function ProfileCard({ users }) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-screen min-h-screen bg-gray-200 flex justify-center flex-col p-5 border">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.length === 0 ? (
            <p className="text-center text-gray-500">No users found.</p>
          ) : (
            filteredUsers.map((user, index) => (
              <div key={index} className="relative p-3 bg-white border shadow hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-64 rounded-2xl object-fill border"
                  />
                  <div className="absolute bottom-0 left-0 bg-amber-800 text-white px-5 py-2 rounded-xl shadow-lg">
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-white text-xs">{user.designation}</p>
                  </div>
                </div>

                <ul className="mt-4 text-olive-800 font-light space-y-1">
                  <li> {user.email}</li>
                  <li> {user.company}</li>
                  <li> {user.country}</li>
                </ul>

                <button
                  onClick={() => navigate('/profile', { state: { user } })}
                  className="bg-blue-400 text-white border rounded p-2 mt-4 block w-full hover:bg-blue-600 shadow-xl"
                >
                  View Profile
                </button>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default ProfileCard
