import { BsEmojiDizzy } from 'react-icons/bs';

import s from './Error.module.css';

function Error() {
    return (
        <div className={s.error}>
            <BsEmojiDizzy />
            <p className={s.text}>Oops, something went wrong!</p>
        </div>
    );
}

export default Error;
