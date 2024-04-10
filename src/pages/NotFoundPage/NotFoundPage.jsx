import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.css';

function NotFoundPage() {
    return (
        <div className={s.div}>
            <h1>Not Found</h1>
            <Link to="/">Go home</Link>
        </div>
    );
}

export default NotFoundPage;
