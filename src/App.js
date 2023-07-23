import logo from './logo.svg';
import './App.css';
import FuncComp from './Components/FuncComp';
import ClassComp from './Components/ClassComp';
import ClassProp from './Components/ClassProps';
import PropFunc from './Components/FuncProps';
import ChildProps from './Components/ChildProps';
import StateClass from './Components/StateClass';

function App() {
  return (
    <>
      <FuncComp/>
      <ClassComp/>
      <PropFunc name="functional prop"/>
      <ClassProp name="class prop"/>
      <ChildProps>Child Property</ChildProps>
      <StateClass/>
    </>
  );
}

export default App;
