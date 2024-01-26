import { DrawCardTest } from "./components/DrawCardTest";
import GameWrapper from "./components/GameWrapper";
import { Home } from "./components/Home";
import DemoHand from "./components/DemoHand";
import DemoObject from "./components/DemoObjects";


const AppRoutes = [
  {
    index: true,
    //element: <Home />
      element: <GameWrapper />    

  },
  {
    path: '/draw-card',
    element: <DrawCardTest />
  },
  {
    path: '/demo-hand',
    element: <DemoHand />
  },
  {
    path: '/demo-object',
    element: <DemoObject />
  },
  {
    path: 'game',
    element: <GameWrapper  />    
  },
  
];

export default AppRoutes;
