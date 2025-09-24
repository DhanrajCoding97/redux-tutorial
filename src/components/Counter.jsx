import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../app/features/counter/counterSlice"

const Counter = () => {
    console.log('Counter component rendering...');
    
    try {
        const count = useSelector((state) => {
            console.log('Current state:', state);
            return state.counter.value;
        });
        const dispatch = useDispatch();
        
        console.log('Current count:', count);
        
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Count: {count}</h1>
                <button 
                    onClick={() => {
                        console.log('Incrementing...');
                        dispatch(increment());
                    }}
                    style={{ margin: '10px', padding: '10px 20px' }}
                >
                    +
                </button>
                <button 
                    onClick={() => {
                        console.log('Decrementing...');
                        dispatch(decrement());
                    }}
                    style={{ margin: '10px', padding: '10px 20px' }}
                >
                    -
                </button>
            </div>
        );
    } catch (error) {
        console.error('Error in Counter component:', error);
        return <div>Error: {error.message}</div>;
    }
};

export default Counter
