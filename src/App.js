import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
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
                    path="/blahblah/:subject"
                    element={
                        <>
                            <SideNav />
                            <PostList />
                        </>
                    }
                />
                <Route
                    path="/blahblah/:subject/:id"
                    element={
                        <div className="flex mt-32 justify-center">
                            <SideNav />
                            <Post />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
