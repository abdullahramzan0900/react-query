import logo from './logo.svg';
import './App.css';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import Main  from './Main';
import { useEffect } from 'react';


function App() {

  const client=new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:true
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
       <Main/>
      </QueryClientProvider>

    </div>
  );
}
export default App;
