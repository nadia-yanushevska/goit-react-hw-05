import { InfinitySpin } from 'react-loader-spinner';

import s from './Loader.module.css';

function Loader() {
    return (
        <div className={s.load_container}>
            <InfinitySpin visible={true} width="200" color="maroon" ariaLabel="infinity-spin-loading" />
        </div>
    );
}

export default Loader;
