import { useAppSelector } from './hooks/hooks';
import { Layout } from './pages/shared/Layout';
import { Router } from './router/Router';

function App() {
  const { isSignIn } = useAppSelector((state) => state.users);
  return (
    <div className="App">
      <Layout />
      <Router isSignIn={isSignIn} />
    </div>
  );
}

export default App;
