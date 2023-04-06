import './Header.css';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='user-information'>
                <h5 className='active'>1</h5>
                <h5 className='heading'>USER INFORMATION</h5>
            </div>
            <div className='address-details'>
                <h5 className='not-active'>2</h5>
                <h5 className='heading'>ADDRESS DETAILS</h5>
            </div>
            <div className='thank-you'>
                <h5 className='not-active'>3</h5>
                <h5 className='heading'>THANK YOU</h5>
            </div>
        </div>
    );
};