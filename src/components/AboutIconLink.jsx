import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* Link removes the need for the page to refresh and load into
            the about page, whereas using a <a href> tag will make it refresh */}
            <Link to={{
                // clean way to name the web link
                pathname: '/about',
                search: '?sort=name',
                hash: '#aboutpage',
            }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
} 

export default AboutIconLink