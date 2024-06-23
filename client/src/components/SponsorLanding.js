import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const SponsorLanding = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <div>
            <div className="container">
                Sponsor Page
            </div>

            {user && (
                <div>
                    <span>You are logged in</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            {!user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )}
        </div>
    )
}

export default SponsorLanding