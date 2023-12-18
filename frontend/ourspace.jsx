import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    
    ReactDOM.render(
        <div>
            <h1>hello</h1>
        </div>
    );
});
