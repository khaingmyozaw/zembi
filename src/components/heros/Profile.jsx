import React from 'react'
import profileImage from '../../asset/images/profile.webp'

const Profile = () => {
    return (
        <div className="w-40 h-40 border border-dashed border-sky-400/50 bg-gray-900 _element-stripes"
            aria-label="Profile">
            <span className="w-full h-full inline-block relative">
                <img src={profileImage} alt="Profile Image" width="100%" height="100%"
                    className="object-cover object-center" />

                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
            </span>
        </div>
    )
}

export default Profile
