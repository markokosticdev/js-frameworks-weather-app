import {routes as ru} from "./routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* eslint-disable-next-line */
export interface AppRouterProps {
}

export function AppRouter(props: AppRouterProps) {

  // const routeComponents = routes.map(({path, component}, key) =>{
  //   return(
  //     <Route path={path} element={component} key={key} />
  //   )
  // });

  return (
    <BrowserRouter>
      <Routes>
        {
          ru.map(({path, component}, key) => {
            return (
              <Route path={path} element={component} key={key}/>
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
