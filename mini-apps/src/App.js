import "./App.css";
import { GitHub } from "./Projects/Axios/GitHub";
import { Context } from "./Projects/ContextAPI/Context";
import { AppContextProvider } from "./Projects/ContextAPI/Context/AppContextProvider";
import { MainForm } from "./Projects/Form/MainForm";
import { SearchBar1 } from "./Projects/SearchBar/SearchBar1";
import { Main } from "./Projects/ReactRouter/Main";
import {
  AuthContext,
  AuthContextProvider,
} from "./Projects/ReactRouter/Context/AuthContext";

import CompoMain from "./Projects/Composition/CompoMain";
import StyledMain from "./Projects/StyledComponents/StyledMain";
import { Todo1 } from "./Projects/Todo2/Todo1";
import { CustomHook } from "./Projects/CustomHook/CustomHook";
import { GithubSearch } from "./Projects/CustomHook/GithubSearch";
import { AppCounterProvider } from "./Projects/UseReducer/AppCounterProvider";
import CounterDisplay from "./Projects/UseReducer/CounterDisplay";

function App() {
  // return <MainForm />;
  // return <SearchBar1 />;
  // return <GitHub />;
  // return (
  //   <AppContextProvider>
  //     <Context />
  //   </AppContextProvider>
  // );
  // return (
  //   <AuthContextProvider>
  //     <Main />
  //   </AuthContextProvider>
  // );
  // return <CompoMain />;
  // return <StyledMain />;
  // return <Todo1 />;
  // return <CustomHook />;

  // return <GithubSearch />;
  return <CounterDisplay />;
}

export default App;
