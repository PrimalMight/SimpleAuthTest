import React from 'react'
import Dashboard from '../../../components/intra/Dashboard'
import UserPage from '../../../components/intra/UserPage'

export default function page({ params }) {
    const slug = params.slug
    const userId = params.userId

    console.log(userId)

    return (
        <>
            {slug === 'dashboard' && (
                <Dashboard userId={userId} />
            )}
            {slug === 'user' && (
                <UserPage userId={userId} />
            )}
        </>
    )
}
