// import { useTransition } from 'react';

function TabButton( children, isActive, onClick ) {
    if (isActive) {
        return <b>{children}</b>
    }
    return (
        <button onClick={() => {
        onClick();
        }}>
        {children}
        </button>
    )
}
export default TabButton