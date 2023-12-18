import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    
    ReactDOM.render(
        <div>
            <h1>hello</h1>
        </div>
    );
});
