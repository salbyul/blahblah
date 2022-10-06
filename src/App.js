import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Main from './routes/Main';
import PostList from './routes/PostList';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/blahblah"
                    element={
                        <>
                            <SideNav />
                            <Main />
                        </>
                    }
                />
                <Route
                    path="/blahblah/:tab"
                    element={
                        <>
                            <SideNav />
                            <PostList />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
