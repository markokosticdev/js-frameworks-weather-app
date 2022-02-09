// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppRouter from "./router/app-router";

export function App() {

  const title = 'Weather Forecast (React)';

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-4">
        <h1>{title}</h1>
      </div>
      <div className="container mt-3">
        <AppRouter/>
      </div>
    </>
  );
}

export default App;
