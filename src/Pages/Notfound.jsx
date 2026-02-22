import { Link } from 'react-router-dom'
import { IconMoodPuzzled, IconHome } from '@tabler/icons-react';


function NotFound() {
    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <IconMoodPuzzled stroke={2} color={'gray'} size={70} />
            <h1 className='text-center'>404 – Not Found</h1>
            <p className='text-center fs-5 text-secondary'>Oops! The page you're looking for doesn't exist.</p>

            <div className='text-center'>
                <Link to='/' className='btn btn-dark'><IconHome stroke={2} /> Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound;